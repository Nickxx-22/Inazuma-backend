import os
import django
import json
import re

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'inazuma_backend.settings')
django.setup()

from personajes.models import Personaje

with open('BBDD_Jugadores.js', 'r', encoding='utf-8') as f:
    contenido = f.read()

# Extrae todo entre "const datos = [" y el último "];"
match = re.search(r'const datos = \[(.*)\];', contenido, re.DOTALL)
if not match:
    print("No se encontró el array de datos")
    exit()

datos_str = '[' + match.group(1) + ']'

# Limpia comentarios de línea //
datos_str = re.sub(r'//[^\n]*', '', datos_str)

# Añade comillas a keys sin ellas (power: -> "power":)
datos_str = re.sub(r'([{,]\s*)(\w+)\s*:', r'\1"\2":', datos_str)

# Elimina comas finales antes de } o ]
datos_str = re.sub(r',\s*([}\]])', r'\1', datos_str)

try:
    jugadores = json.loads(datos_str)
    print(f"Jugadores encontrados: {len(jugadores)}")
except json.JSONDecodeError as e:
    print(f"Error parseando JSON en posición {e.pos}: {e.msg}")
    print(f"Contexto: ...{datos_str[max(0,e.pos-50):e.pos+50]}...")
    exit()

creados = 0
errores = 0

def fix_montana(valor):
    if isinstance(valor, str):
        return valor.replace('Monta\u00f1a', 'Montaña')
    return valor

for j in jugadores:
    try:
        stats       = j.get('stats', {})
        match_stats = j.get('matchStats', {})

        Personaje.objects.update_or_create(
            slug=j['_id'],
            defaults={
                'nombre':          j.get('name', ''),
                'sexo':            j.get('sex', 'M'),
                'posicion':        j.get('position', ''),
                'elemento': fix_montana(j.get('element', '')),
                'naturaleza':      j.get('nature', ''),
                'tier':            j.get('tier', ''),
                'es_capitan':      j.get('isCaptain', False),
                'grupo_edad':      j.get('ageGroup', ''),
                'curso':           j.get('schoolGrade', ''),
                'pais':            j.get('country', ''),
                'imagen':          j.get('image', {}).get('url', ''),
                'imagen_detalle':  j.get('imageDetail', {}).get('url', ''),
                'imagen_posicion': j.get('position_image', {}).get('url', ''),
                'imagen_elemento': j.get('element_image', {}).get('url', ''),
                'imagen_pais':     j.get('country_image', {}).get('url', ''),
                'poder':           stats.get('power', 0),
                'control':         stats.get('control', 0),
                'tecnica':         stats.get('technique', 0),
                'presion':         stats.get('pressure', 0),
                'fisico':          stats.get('physique', 0),
                'agilidad':        stats.get('agility', 0),
                'inteligencia':    stats.get('intelligence', 0),
                'remate':          stats.get('kicking', 0),
                'defensa':         stats.get('defense', 0),
                'disputa':         stats.get('dispute', 0),
                'stamina':         match_stats.get('stamina', 100),
                'tension':         match_stats.get('tension', 100),
            }
        )
        creados += 1
    except Exception as e:
        print(f"Error con {j.get('_id', '?')}: {e}")
        errores += 1

print(f"\nImportación completada: {creados} jugadores creados, {errores} errores")