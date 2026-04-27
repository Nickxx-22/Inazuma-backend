import os
import django
import json
import re

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'inazuma_backend.settings')
django.setup()

from equipos.models import Equipo
from personajes.models import Personaje

with open('BBDD_Equipos.js', 'r', encoding='utf-8') as f:
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
    equipos = json.loads(datos_str)
    print(f"Equipos encontrados: {len(equipos)}")
except json.JSONDecodeError as e:
    print(f"Error parseando JSON en posición {e.pos}: {e.msg}")
    print(f"Contexto: ...{datos_str[max(0,e.pos-80):e.pos+80]}...")
    exit()

creados = 0
errores = 0

for e in equipos:
    try:
        equipo, _ = Equipo.objects.update_or_create(
            slug=e['_id'],
            defaults={
                'nombre':          e.get('name', ''),
                'pais':            e.get('country', ''),
                'academia':        e.get('academy', ''),
                'categoria':       e.get('category', ''),
                'color_principal': e.get('color_primary', ''),
                'imagen':          e.get('image', {}).get('url', ''),
                'entrenador_slug': e.get('coach_id', None),
                'temporadas':      e.get('seasons', []),
            }
        )

        # Añadir jugadores al equipo
        for slug in e.get('player_ids', []):
            try:
                personaje = Personaje.objects.get(slug=slug)
                equipo.jugadores.add(personaje)
            except Personaje.DoesNotExist:
                pass

        creados += 1
    except Exception as ex:
        print(f"Error con {e.get('_id', '?')}: {ex}")
        errores += 1

print(f"\nImportación completada: {creados} equipos creados, {errores} errores")