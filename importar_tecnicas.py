import os
import django
import json
import re

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'inazuma_backend.settings')
django.setup()

from tecnicas.models import Tecnica
from personajes.models import Personaje

with open('BBDD_Tecnicas.js', 'r', encoding='utf-8') as f:
    contenido = f.read()

match = re.search(r'const datos = \[(.*)\];', contenido, re.DOTALL)
if not match:
    print("No se encontró el array de datos")
    exit()

datos_str = '[' + match.group(1) + ']'
datos_str = re.sub(r'//[^\n]*', '', datos_str)
datos_str = re.sub(r'([{,]\s*)(\w+)\s*:', r'\1"\2":', datos_str)
datos_str = re.sub(r',\s*([}\]])', r'\1', datos_str)

try:
    tecnicas = json.loads(datos_str)
    print(f"Técnicas encontradas: {len(tecnicas)}")
except json.JSONDecodeError as e:
    print(f"Error parseando JSON en posición {e.pos}: {e.msg}")
    print(f"Contexto: ...{datos_str[max(0,e.pos-80):e.pos+80]}...")
    exit()

creados = 0
errores = 0

for t in tecnicas:
    try:
        cost = t.get('cost', {})

        tecnica, _ = Tecnica.objects.update_or_create(
            slug=t['_id'],
            defaults={
                'nombre':          t.get('name', ''),
                'tipo':            t.get('type', ''),
                'subtipo':         t.get('subtype', []),
                'elemento':        t.get('element', ''),
                'imagen_elemento': t.get('element_image', {}).get('url', ''),
                'video_url':       t.get('videoUrl', {}).get('url', ''),
                'poder_base':      t.get('basePower', 0),
                'coste_stamina':   cost.get('stamina', 0),
                'coste_tension':   cost.get('tension', 0),
            }
        )

        # Relación creador (es un string o string vacío)
        creador_slug = t.get('creador', '')
        if creador_slug and isinstance(creador_slug, str):
            try:
                creador = Personaje.objects.get(slug=creador_slug)
                tecnica.creadores.add(creador)
            except Personaje.DoesNotExist:
                pass

        # Relación herederos (es una lista)
        for slug in t.get('heredero', []):
            try:
                personaje = Personaje.objects.get(slug=slug)
                tecnica.herederos.add(personaje)
            except Personaje.DoesNotExist:
                pass

        # Relación copias (es una lista)
        for slug in t.get('copia', []):
            try:
                personaje = Personaje.objects.get(slug=slug)
                tecnica.copias.add(personaje)
            except Personaje.DoesNotExist:
                pass

        creados += 1
    except Exception as e:
        print(f"Error con {t.get('_id', '?')}: {e}")
        errores += 1

print(f"\nImportación completada: {creados} técnicas creadas, {errores} errores")