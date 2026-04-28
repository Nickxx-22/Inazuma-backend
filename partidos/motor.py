import random
from personajes.models import Personaje
from tecnicas.models import Tecnica

RONDA_NOMBRES = {
    1: 'Dieciseisavos',
    2: 'Octavos',
    3: 'Cuartos',
    4: 'Semifinal',
    5: 'Final',
}

# ── Helpers ──────────────────────────────────────────────────────

def get_tecnica_por_tipo(personaje_slug, tipo):
    """Devuelve una técnica aleatoria del personaje según el tipo de evento."""
    try:
        p = Personaje.objects.get(slug=personaje_slug)
        tecnicas = list(
            Tecnica.objects.filter(creadores=p, subtipo__contains=tipo)
        )
        if tecnicas:
            t = random.choice(tecnicas)
            return {
                'slug':      t.slug,
                'nombre':    t.nombre,
                'video_url': t.video_url,
                'poder':     t.poder_base,
            }
    except Personaje.DoesNotExist:
        pass
    return None


def construir_plantilla(slots, characters_data):
    """Construye la plantilla a partir de los slots del equipo del usuario."""
    plantilla = {'GK': [], 'DF': [], 'MD': [], 'FW': []}
    for slot in slots:
        char_id = slot.get('characterId')
        if not char_id:
            continue
        try:
            p = Personaje.objects.get(slug=char_id)
            plantilla[p.posicion].append({
                'slug':    p.slug,
                'nombre':  p.nombre,
                'posicion': p.posicion,
                'poder':   p.poder,
                'tecnica': p.tecnica,
                'remate':  p.remate,
                'defensa': p.defensa,
                'agilidad': p.agilidad,
            })
        except Personaje.DoesNotExist:
            pass
    return plantilla


def generar_equipo_rival(equipo_db=None):
    """Genera un equipo rival: real de BD o aleatorio con jugadores."""
    from equipos.models import Equipo

    if equipo_db:
        jugadores = list(equipo_db.jugadores.all()[:11])
    else:
        jugadores = list(Personaje.objects.order_by('?')[:11])

    plantilla = {'GK': [], 'DF': [], 'MD': [], 'FW': []}
    for p in jugadores:
        pos = p.posicion if p.posicion in plantilla else 'MD'
        plantilla[pos].append({
            'slug':    p.slug,
            'nombre':  p.nombre,
            'posicion': p.posicion,
            'poder':   p.poder,
            'tecnica': p.tecnica,
            'remate':  p.remate,
            'defensa': p.defensa,
            'agilidad': p.agilidad,
        })

    nombre = equipo_db.nombre if equipo_db else f"Equipo Misterioso {random.randint(1,99)}"
    return nombre, plantilla


def pick(lista):
    return random.choice(lista) if lista else None


# ── Motor principal ───────────────────────────────────────────────

def simular_partido(plantilla_local, nombre_local, plantilla_rival, nombre_rival):
    """
    Simula un partido completo y devuelve goles y lista de eventos.
    Cada evento tiene: minuto, tipo, equipo, jugador, descripcion, tecnica (opcional)
    """
    eventos = []
    goles_local   = 0
    goles_visitante = 0

    # Stats acumuladas para las estadísticas del torneo
    stats = {
        'goleadores': {},
        'porteros':   {},
        'regates':    {},
    }

    # Generamos entre 18 y 30 eventos por partido
    minutos = sorted(random.sample(range(1, 91), random.randint(18, 30)))

    for minuto in minutos:
        # Decidimos qué equipo tiene el balón
        es_local = random.random() < 0.5
        ataca    = plantilla_local  if es_local else plantilla_rival
        defiende = plantilla_rival  if es_local else plantilla_local
        nombre_atacante  = nombre_local  if es_local else nombre_rival
        nombre_defensor  = nombre_rival  if es_local else nombre_local

        # Tipo de evento según posición
        tipo_evento = random.choices(
            ['regate', 'robo', 'ocasion', 'tiro', 'tiro'],
            weights=[25, 20, 20, 17, 18]
        )[0]

        evento = {
            'minuto':   minuto,
            'tipo':     tipo_evento,
            'equipo':   nombre_atacante,
            'tecnica':  None,
            'descripcion': '',
            'es_gol':   False,
        }

        if tipo_evento == 'regate':
            jugador = pick(ataca.get('MD', []) + ataca.get('FW', []))
            if jugador:
                tecnica = get_tecnica_por_tipo(jugador['slug'], 'regate')
                evento['jugador'] = jugador['nombre']
                evento['tecnica'] = tecnica
                if tecnica:
                    evento['descripcion'] = (
                        f"min {minuto}' — {jugador['nombre']} ({nombre_atacante}) "
                        f"supera a su rival con {tecnica['nombre']}!"
                    )
                    # Acumular regates
                    s = stats['regates'].setdefault(jugador['slug'], {'nombre': jugador['nombre'], 'regates': 0})
                    s['regates'] += 1
                else:
                    evento['descripcion'] = (
                        f"min {minuto}' — {jugador['nombre']} ({nombre_atacante}) "
                        f"regatea al defensor!"
                    )

        elif tipo_evento == 'robo':
            jugador = pick(defiende.get('DF', []) + defiende.get('MD', []))
            if jugador:
                tecnica = get_tecnica_por_tipo(jugador['slug'], 'quitar')
                evento['jugador'] = jugador['nombre']
                evento['equipo']  = nombre_defensor
                evento['tecnica'] = tecnica
                if tecnica:
                    evento['descripcion'] = (
                        f"min {minuto}' — {jugador['nombre']} ({nombre_defensor}) "
                        f"roba el balón con {tecnica['nombre']}!"
                    )
                else:
                    evento['descripcion'] = (
                        f"min {minuto}' — {jugador['nombre']} ({nombre_defensor}) "
                        f"intercepta el pase!"
                    )

        elif tipo_evento == 'ocasion':
            jugador = pick(ataca.get('FW', []) + ataca.get('MD', []))
            if jugador:
                evento['jugador'] = jugador['nombre']
                evento['descripcion'] = (
                    f"min {minuto}' — Ocasión! {jugador['nombre']} ({nombre_atacante}) "
                    f"se queda solo ante el portero!"
                )

        elif tipo_evento == 'tiro':
            tirador = pick(ataca.get('FW', []) + ataca.get('MD', []))
            portero = pick(defiende.get('GK', []))

            if tirador and portero:
                evento['jugador'] = tirador['nombre']
                tec_tiro   = get_tecnica_por_tipo(tirador['slug'], 'tiro')
                tec_parada = get_tecnica_por_tipo(portero['slug'],  'parada')

                # Calcular probabilidad de gol según stats
                poder_tiro   = tirador.get('remate', 50) + (tec_tiro['poder']   if tec_tiro   else 0)
                poder_parada = portero.get('defensa', 50) + (tec_parada['poder'] if tec_parada else 0)
                prob_gol     = poder_tiro / (poder_tiro + poder_parada + 1)
                es_gol       = random.random() < prob_gol

                if es_gol:
                    if es_local:
                        goles_local += 1
                    else:
                        goles_visitante += 1
                    evento['es_gol'] = True

                    g = stats['goleadores'].setdefault(tirador['slug'], {'nombre': tirador['nombre'], 'goles': 0})
                    g['goles'] += 1

                    if tec_tiro:
                        evento['tecnica'] = tec_tiro
                        evento['descripcion'] = (
                            f"min {minuto}' ⚽ GOL! {tirador['nombre']} marca con "
                            f"{tec_tiro['nombre']}! ({nombre_local} {goles_local} - "
                            f"{goles_visitante} {nombre_rival})"
                        )
                    else:
                        evento['descripcion'] = (
                            f"min {minuto}' ⚽ GOL! {tirador['nombre']} ({nombre_atacante}) "
                            f"marca! ({nombre_local} {goles_local} - {goles_visitante} {nombre_rival})"
                        )
                else:
                    p_slug = portero['slug']
                    ps = stats['porteros'].setdefault(p_slug, {'nombre': portero['nombre'], 'paradas': 0})
                    ps['paradas'] += 1

                    tec_evento = tec_parada or tec_tiro
                    evento['tecnica'] = {
                        'tiro':   tec_tiro,
                        'parada': tec_parada,
                    }
                    if tec_tiro and tec_parada:
                        evento['descripcion'] = (
                            f"min {minuto}' — {tirador['nombre']} dispara con {tec_tiro['nombre']} "
                            f"pero {portero['nombre']} lo para con {tec_parada['nombre']}!"
                        )
                    elif tec_tiro:
                        evento['descripcion'] = (
                            f"min {minuto}' — {tirador['nombre']} dispara con {tec_tiro['nombre']} "
                            f"pero {portero['nombre']} lo detiene!"
                        )
                    else:
                        evento['descripcion'] = (
                            f"min {minuto}' — {tirador['nombre']} dispara pero "
                            f"{portero['nombre']} lo para!"
                        )

        if evento.get('descripcion'):
            eventos.append(evento)

    return goles_local, goles_visitante, eventos, stats


def sortear_torneo(equipo_usuario, nombre_usuario):
    """Genera el cuadro completo del torneo con 16 equipos."""
    from equipos.models import Equipo

    equipos_reales = list(Equipo.objects.order_by('?')[:8])
    nombres_rivales = []

    for eq in equipos_reales:
        nombres_rivales.append({'nombre': eq.nombre, 'slug': eq.slug, 'es_real': True})

    # Completar con equipos generados hasta 15
    while len(nombres_rivales) < 15:
        nombres_rivales.append({
            'nombre': f"Equipo Misterioso {random.randint(100, 999)}",
            'slug':   None,
            'es_real': False,
        })

    random.shuffle(nombres_rivales)

    # Insertar al usuario en posición aleatoria
    pos_usuario = random.randint(0, 15)
    nombres_rivales.insert(pos_usuario, {
        'nombre':    nombre_usuario,
        'slug':      'usuario',
        'es_usuario': True,
    })

    # Crear enfrentamientos (pares)
    enfrentamientos = []
    for i in range(0, 16, 2):
        enfrentamientos.append({
            'local':     nombres_rivales[i],
            'visitante': nombres_rivales[i + 1],
            'jugado':    False,
            'resultado': None,
        })

    return {
        'ronda_1': enfrentamientos,
        'equipos': nombres_rivales,
    }