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
    print(f"Error parseando JSON: {e}")
    exit()

def fix_montana(valor):
    if isinstance(valor, str):
        return valor.replace('Monta\u00f1a', 'Montaña')
    return valor

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
                'elemento':        fix_montana(t.get('element', '')),
                'imagen_elemento': t.get('element_image', {}).get('url', ''),
                'video_url':       t.get('videoUrl', {}).get('url', ''),
                'poder_base':      t.get('basePower', 0),
                'coste_stamina':   cost.get('stamina', 0),
                'coste_tension':   cost.get('tension', 0),
            }
        )

        # ⚠️ Solo limpiar si estás seguro de reconstruir todo
        tecnica.creadores.clear()
        tecnica.herederos.clear()
        tecnica.copias.clear()

        def add_relaciones(lista, campo):
            if isinstance(lista, str):
                lista = [lista]

            for slug in lista:
                if not slug:
                    continue
                try:
                    personaje = Personaje.objects.get(slug=slug)
                    getattr(tecnica, campo).add(personaje)
                except Personaje.DoesNotExist:
                    print(f"⚠️ Personaje no encontrado: {slug}")

        add_relaciones(t.get('creador', []), 'creadores')
        add_relaciones(t.get('heredero', []), 'herederos')
        add_relaciones(t.get('copia', []), 'copias')

        creados += 1

    except Exception as e:
        print(f"Error con {t.get('_id', '?')}: {e}")
        errores += 1

print(f"\nImportación completada: {creados} técnicas creadas, {errores} errores")