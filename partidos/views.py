from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.utils import timezone
from .models import Torneo, Partido, EstadisticasTorneo
from .motor import (
    simular_partido, sortear_torneo,
    construir_plantilla, generar_equipo_rival
)
from equipos.models import Equipo


class CrearTorneoView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user

        # Verificar que tiene equipo guardado
        equipos = user.equipos_guardados
        if not equipos:
            return Response(
                {'message': 'Necesitas guardar un equipo antes de participar'},
                status=status.HTTP_400_BAD_REQUEST
            )

        nombre_equipo = request.data.get('nombre_equipo') or list(equipos.keys())[0]
        slots = equipos.get(nombre_equipo, [])

        if not slots:
            return Response(
                {'message': 'El equipo seleccionado está vacío'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Cerrar torneo anterior si existe en curso
        Torneo.objects.filter(usuario=user, estado='en_curso').update(estado='finalizado')

        # Sortear torneo
        cuadro = sortear_torneo(slots, nombre_equipo)

        torneo = Torneo.objects.create(
            usuario=user,
            cuadro=cuadro,
            estado='en_curso',
            ronda_actual=1,
        )

        # Crear estadísticas vacías
        EstadisticasTorneo.objects.create(torneo=torneo, usuario=user)

        return Response({
            'message':      'Torneo creado',
            'torneo_id':    torneo.id,
            'cuadro':       cuadro,
            'nombre_equipo': nombre_equipo,
        }, status=status.HTTP_201_CREATED)


class SimularPartidoView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, torneo_id):
        user = request.user

        try:
            torneo = Torneo.objects.get(id=torneo_id, usuario=user, estado='en_curso')
        except Torneo.DoesNotExist:
            return Response({'message': 'Torneo no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        nombre_equipo = request.data.get('nombre_equipo')
        slots         = user.equipos_guardados.get(nombre_equipo, [])

        if not slots:
            return Response({'message': 'Equipo no encontrado'}, status=status.HTTP_400_BAD_REQUEST)

        # Obtener rival de la ronda actual
        ronda_key = f'ronda_{torneo.ronda_actual}'
        enfrentamientos = torneo.cuadro.get(ronda_key, [])

        # Buscar el enfrentamiento del usuario
        enfrentamiento = None
        idx = None
        for i, e in enumerate(enfrentamientos):
            local    = e.get('local', {})
            visitante = e.get('visitante', {})
            if local.get('es_usuario') or visitante.get('es_usuario'):
                enfrentamiento = e
                idx = i
                break

        if not enfrentamiento:
            return Response({'message': 'No hay partido pendiente en esta ronda'}, status=status.HTTP_400_BAD_REQUEST)

        if enfrentamiento.get('jugado'):
            return Response({'message': 'Este partido ya fue jugado'}, status=status.HTTP_400_BAD_REQUEST)

        # Construir plantillas
        plantilla_local = construir_plantilla(slots, [])
        es_local        = enfrentamiento['local'].get('es_usuario', False)
        rival_data      = enfrentamiento['visitante'] if es_local else enfrentamiento['local']
        nombre_rival    = rival_data['nombre']

        # Generar rival
        if rival_data.get('es_real') and rival_data.get('slug'):
            try:
                equipo_db = Equipo.objects.get(slug=rival_data['slug'])
                nombre_rival, plantilla_rival = generar_equipo_rival(equipo_db)
            except Equipo.DoesNotExist:
                nombre_rival, plantilla_rival = generar_equipo_rival()
        else:
            nombre_rival, plantilla_rival = generar_equipo_rival()
            nombre_rival = rival_data['nombre']

        # Simular
        if es_local:
            goles_local, goles_visitante, eventos, stats = simular_partido(
                plantilla_local, nombre_equipo, plantilla_rival, nombre_rival
            )
        else:
            goles_visitante, goles_local, eventos, stats = simular_partido(
                plantilla_rival, nombre_rival, plantilla_local, nombre_equipo
            )
            goles_local, goles_visitante = goles_visitante, goles_local

        victoria = goles_local > goles_visitante if es_local else goles_visitante > goles_local

        # Guardar partido
        partido = Partido.objects.create(
            torneo=torneo,
            ronda=torneo.ronda_actual,
            equipo_local=nombre_equipo if es_local else nombre_rival,
            equipo_visitante=nombre_rival if es_local else nombre_equipo,
            goles_local=goles_local,
            goles_visitante=goles_visitante,
            resultado='victoria' if victoria else 'derrota',
            eventos=eventos,
        )

        # Actualizar estadísticas
        est = torneo.estadisticas
        est.partidos_jugados += 1
        if victoria:
            est.partidos_ganados += 1
        est.goles_marcados  += goles_local if es_local else goles_visitante
        est.goles_recibidos += goles_visitante if es_local else goles_local
        est.ronda_alcanzada  = torneo.ronda_actual

        # Acumular goleadores, porteros y regates
        for slug, data in stats['goleadores'].items():
            g = est.goleadores.setdefault(slug, {'nombre': data['nombre'], 'goles': 0})
            g['goles'] += data['goles']
        for slug, data in stats['porteros'].items():
            p = est.porteros.setdefault(slug, {'nombre': data['nombre'], 'paradas': 0})
            p['paradas'] += data['paradas']
        for slug, data in stats['regates'].items():
            r = est.regates.setdefault(slug, {'nombre': data['nombre'], 'regates': 0})
            r['regates'] += data['regates']

        est.save()

        # Marcar enfrentamiento como jugado en el cuadro
        cuadro = torneo.cuadro
        cuadro[ronda_key][idx]['jugado']    = True
        cuadro[ronda_key][idx]['resultado'] = {
            'goles_local':     goles_local,
            'goles_visitante': goles_visitante,
            'ganador':         nombre_equipo if victoria else nombre_rival,
        }

        if victoria:
            # Avanzar de ronda o ganar torneo
            torneo.ronda_actual += 1
            if torneo.ronda_actual > 4:
                torneo.estado         = 'finalizado'
                torneo.finalizado_en  = timezone.now()
                est.campeon           = True
                est.save()
        else:
            torneo.estado        = 'finalizado'
            torneo.finalizado_en = timezone.now()

        torneo.cuadro = cuadro
        torneo.save()

        return Response({
            'partido_id':       partido.id,
            'goles_local':      goles_local,
            'goles_visitante':  goles_visitante,
            'resultado':        'victoria' if victoria else 'derrota',
            'eventos':          eventos,
            'torneo_estado':    torneo.estado,
            'ronda_actual':     torneo.ronda_actual,
        })


class TorneoDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, torneo_id):
        try:
            torneo = Torneo.objects.get(id=torneo_id, usuario=request.user)
        except Torneo.DoesNotExist:
            return Response({'message': 'Torneo no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        est = torneo.estadisticas
        return Response({
            'torneo_id':      torneo.id,
            'estado':         torneo.estado,
            'ronda_actual':   torneo.ronda_actual,
            'cuadro':         torneo.cuadro,
            'estadisticas': {
                'partidos_jugados':  est.partidos_jugados,
                'partidos_ganados':  est.partidos_ganados,
                'goles_marcados':    est.goles_marcados,
                'goles_recibidos':   est.goles_recibidos,
                'ronda_alcanzada':   est.ronda_alcanzada,
                'campeon':           est.campeon,
                'goleadores':        sorted(est.goleadores.values(), key=lambda x: x['goles'], reverse=True)[:5],
                'porteros':          sorted(est.porteros.values(),   key=lambda x: x['paradas'], reverse=True)[:5],
                'regates':           sorted(est.regates.values(),    key=lambda x: x['regates'], reverse=True)[:5],
            }
        })


class HistorialTorneosView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        torneos = Torneo.objects.filter(usuario=request.user).order_by('-creado_en')
        result  = []
        for t in torneos:
            est = t.estadisticas
            result.append({
                'torneo_id':         t.id,
                'estado':            t.estado,
                'creado_en':         str(t.creado_en),
                'partidos_jugados':  est.partidos_jugados,
                'partidos_ganados':  est.partidos_ganados,
                'ronda_alcanzada':   est.ronda_alcanzada,
                'campeon':           est.campeon,
            })
        return Response({'torneos': result})