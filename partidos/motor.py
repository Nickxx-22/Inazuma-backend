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
        todas_tecnicas = list(Tecnica.objects.filter(creadores=p))
        tecnicas = [t for t in todas_tecnicas if tipo in (t.subtipo or [])]
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


def tiene_tecnica_tipo(personaje_slug, tipo):
    """Comprueba si un jugador tiene al menos una técnica del tipo dado."""
    try:
        p = Personaje.objects.get(slug=personaje_slug)
        todas = list(Tecnica.objects.filter(creadores=p))
        return any(tipo in (t.subtipo or []) for t in todas)
    except Personaje.DoesNotExist:
        return False


def pick(lista):
    return random.choice(lista) if lista else None


def pick_con_tecnica(lista, tipo):
    """Elige un jugador aleatorio que tenga técnica del tipo requerido."""
    candidatos = [j for j in lista if tiene_tecnica_tipo(j['slug'], tipo)]
    if candidatos:
        return random.choice(candidatos)
    return None


def construir_plantilla(slots, characters_data):
    plantilla = {'GK': [], 'DF': [], 'MD': [], 'FW': []}
    for slot in slots:
        char_id = slot.get('characterId')
        if not char_id:
            continue
        try:
            p = Personaje.objects.get(slug=char_id)
            plantilla[p.posicion].append({
                'slug':     p.slug,
                'nombre':   p.nombre,
                'posicion': p.posicion,
                'poder':    p.poder,
                'tecnica':  p.tecnica,
                'remate':   p.remate,
                'defensa':  p.defensa,
                'agilidad': p.agilidad,
            })
        except Personaje.DoesNotExist:
            pass
    return plantilla


def generar_equipo_rival(equipo_db=None):
    if equipo_db:
        jugadores = list(equipo_db.jugadores.all()[:11])
    else:
        jugadores = list(Personaje.objects.order_by('?')[:11])

    plantilla = {'GK': [], 'DF': [], 'MD': [], 'FW': []}
    for p in jugadores:
        pos = p.posicion if p.posicion in plantilla else 'MD'
        plantilla[pos].append({
            'slug':     p.slug,
            'nombre':   p.nombre,
            'posicion': p.posicion,
            'poder':    p.poder,
            'tecnica':  p.tecnica,
            'remate':   p.remate,
            'defensa':  p.defensa,
            'agilidad': p.agilidad,
        })

    nombre = equipo_db.nombre if equipo_db else f"Equipo Misterioso {random.randint(1, 99)}"
    return nombre, plantilla


# ── Motor principal ───────────────────────────────────────────────

def simular_partido(plantilla_local, nombre_local, plantilla_rival, nombre_rival):
    eventos        = []
    goles_local    = 0
    goles_visitante = 0
    stats = {
        'goleadores': {},
        'porteros':   {},
        'regates':    {},
    }

    minutos = sorted(random.sample(range(1, 91), random.randint(22, 32)))

    for minuto in minutos:
        es_local        = random.random() < 0.5
        ataca           = plantilla_local  if es_local else plantilla_rival
        defiende        = plantilla_rival  if es_local else plantilla_local
        nombre_atacante = nombre_local     if es_local else nombre_rival
        nombre_defensor = nombre_rival     if es_local else nombre_local

        tipo_evento = random.choices(
            ['regate', 'robo', 'ocasion', 'tiro'],
            weights=[25, 20, 20, 35]
        )[0]

        evento = {
            'minuto':      minuto,
            'tipo':        tipo_evento,
            'equipo':      nombre_atacante,
            'tecnica':     None,
            'descripcion': '',
            'es_gol':      False,
        }

        # ── REGATE ──────────────────────────────────────────────
        if tipo_evento == 'regate':
            candidatos = ataca.get('MD', []) + ataca.get('FW', [])
            jugador    = pick_con_tecnica(candidatos, 'regate')
            if jugador:
                tecnica = get_tecnica_por_tipo(jugador['slug'], 'regate')
                evento['jugador'] = jugador['nombre']
                evento['tecnica'] = {'regate': tecnica}
                evento['descripcion'] = (
                    f"min {minuto}' — {jugador['nombre']} ({nombre_atacante}) "
                    f"supera a su rival con {tecnica['nombre']}!"
                )
                s = stats['regates'].setdefault(jugador['slug'], {'nombre': jugador['nombre'], 'regates': 0})
                s['regates'] += 1

        # ── ROBO ────────────────────────────────────────────────
        elif tipo_evento == 'robo':
            candidatos = defiende.get('DF', []) + defiende.get('MD', [])
            jugador    = pick_con_tecnica(candidatos, 'quitar')
            if jugador:
                tecnica = get_tecnica_por_tipo(jugador['slug'], 'quitar')
                evento['jugador'] = jugador['nombre']
                evento['equipo']  = nombre_defensor
                evento['tecnica'] = {'robo': tecnica}
                evento['descripcion'] = (
                    f"min {minuto}' — {jugador['nombre']} ({nombre_defensor}) "
                    f"roba el balón con {tecnica['nombre']}!"
                )

        # ── OCASIÓN ─────────────────────────────────────────────
        elif tipo_evento == 'ocasion':
            jugador = pick(ataca.get('FW', []) + ataca.get('MD', []))
            if jugador:
                evento['jugador'] = jugador['nombre']
                evento['descripcion'] = (
                    f"min {minuto}' — ¡Ocasión! {jugador['nombre']} ({nombre_atacante}) "
                    f"se queda solo ante el portero!"
                )

        # ── TIRO ────────────────────────────────────────────────
        elif tipo_evento == 'tiro':
            tirador = pick(ataca.get('FW', []) + ataca.get('MD', []))
            portero = pick(defiende.get('GK', []))

            if tirador and portero:
                evento['jugador'] = tirador['nombre']
                tec_tiro   = get_tecnica_por_tipo(tirador['slug'], 'tiro')
                tec_parada = get_tecnica_por_tipo(portero['slug'],  'parada')

                poder_tiro   = tirador.get('remate', 50) + (tec_tiro['poder']   if tec_tiro   else 0)
                poder_parada = portero.get('defensa', 50) + (tec_parada['poder'] if tec_parada else 0)
                prob_gol     = poder_tiro / (poder_tiro + poder_parada + 1)
                es_gol       = random.random() < prob_gol

                evento['tecnica'] = {
                    'tiro':   tec_tiro,
                    'parada': tec_parada,
                }

                if es_gol:
                    if es_local:
                        goles_local += 1
                    else:
                        goles_visitante += 1
                    evento['es_gol'] = True

                    g = stats['goleadores'].setdefault(tirador['slug'], {'nombre': tirador['nombre'], 'goles': 0})
                    g['goles'] += 1

                    evento['descripcion'] = (
                        f"min {minuto}' ⚽ ¡GOL! {tirador['nombre']} marca"
                    )
                    if tec_tiro:
                        evento['descripcion'] += f" con {tec_tiro['nombre']}"
                    evento['descripcion'] += f"! ({nombre_local} {goles_local} - {goles_visitante} {nombre_rival})"
                else:
                    p_slug = portero['slug']
                    ps = stats['porteros'].setdefault(p_slug, {'nombre': portero['nombre'], 'paradas': 0})
                    ps['paradas'] += 1

                    evento['descripcion'] = f"min {minuto}' — {tirador['nombre']} dispara"
                    if tec_tiro:
                        evento['descripcion'] += f" con {tec_tiro['nombre']}"
                    evento['descripcion'] += f" pero {portero['nombre']}"
                    if tec_parada:
                        evento['descripcion'] += f" lo para con {tec_parada['nombre']}"
                    else:
                        evento['descripcion'] += " lo detiene"
                    evento['descripcion'] += "!"

        if evento.get('descripcion'):
            eventos.append(evento)

    # ── PENALTIS si hay empate ───────────────────────────────────
    if goles_local == goles_visitante:
        pen_local    = random.randint(3, 5)
        pen_visitante = random.randint(3, 5)

        # Aseguramos que no haya empate en penaltis
        while pen_local == pen_visitante:
            pen_visitante = random.randint(3, 5)

        goles_local    += pen_local
        goles_visitante += pen_visitante

        eventos.append({
            'minuto':      90,
            'tipo':        'penaltis',
            'equipo':      nombre_local,
            'tecnica':     None,
            'descripcion': (
                f"¡Penaltis! {nombre_local} {pen_local} - {pen_visitante} {nombre_rival}. "
                f"{'¡' + nombre_local + ' gana!' if pen_local > pen_visitante else '¡' + nombre_rival + ' gana!'}"
            ),
            'es_gol': False,
        })

    return goles_local, goles_visitante, eventos, stats


def sortear_torneo(equipo_usuario, nombre_usuario):
    from equipos.models import Equipo

    equipos_reales  = list(Equipo.objects.order_by('?')[:8])
    nombres_rivales = []

    for eq in equipos_reales:
        nombres_rivales.append({'nombre': eq.nombre, 'slug': eq.slug, 'es_real': True})

    while len(nombres_rivales) < 15:
        nombres_rivales.append({
            'nombre':  f"Equipo Misterioso {random.randint(100, 999)}",
            'slug':    None,
            'es_real': False,
        })

    random.shuffle(nombres_rivales)

    pos_usuario = random.randint(0, 15)
    nombres_rivales.insert(pos_usuario, {
        'nombre':     nombre_usuario,
        'slug':       'usuario',
        'es_usuario': True,
    })

    enfrentamientos = []
    for i in range(0, 16, 2):
        enfrentamientos.append({
            'local':     nombres_rivales[i],
            'visitante': nombres_rivales[i + 1],
            'jugado':    False,
            'resultado': None,
        })

    return {
        'ronda_1':  enfrentamientos,
        'equipos':  nombres_rivales,
    }