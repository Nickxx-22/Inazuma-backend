from django.db import models
from usuarios.models import Usuario
from personajes.models import Personaje

class Torneo(models.Model):
    ESTADOS = [
        ('en_curso',   'En curso'),
        ('finalizado', 'Finalizado'),
    ]

    usuario     = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='torneos')
    estado      = models.CharField(max_length=15, choices=ESTADOS, default='en_curso')
    ronda_actual = models.IntegerField(default=1)  # 1=16avos, 2=8avos, 3=semis, 4=final
    cuadro      = models.JSONField(default=dict)   # estructura completa del torneo
    creado_en   = models.DateTimeField(auto_now_add=True)
    finalizado_en = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Torneo de {self.usuario.username} — {self.estado}"


class Partido(models.Model):
    RESULTADOS = [
        ('victoria', 'Victoria'),
        ('derrota',  'Derrota'),
        ('pendiente','Pendiente'),
    ]

    torneo      = models.ForeignKey(Torneo, on_delete=models.CASCADE, related_name='partidos')
    ronda       = models.IntegerField()
    equipo_local   = models.CharField(max_length=100)  # nombre del equipo del usuario
    equipo_visitante = models.CharField(max_length=100)
    goles_local    = models.IntegerField(default=0)
    goles_visitante = models.IntegerField(default=0)
    resultado   = models.CharField(max_length=10, choices=RESULTADOS, default='pendiente')
    eventos     = models.JSONField(default=list)   # lista de eventos del partido
    creado_en   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.equipo_local} {self.goles_local} - {self.goles_visitante} {self.equipo_visitante}"


class EstadisticasTorneo(models.Model):
    torneo      = models.OneToOneField(Torneo, on_delete=models.CASCADE, related_name='estadisticas')
    usuario     = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='estadisticas_torneos')

    # Goleadores — {slug: {nombre, goles}}
    goleadores  = models.JSONField(default=dict)

    # Porteros — {slug: {nombre, paradas}}
    porteros    = models.JSONField(default=dict)

    # Regates — {slug: {nombre, regates}}
    regates     = models.JSONField(default=dict)

    # Resumen general
    partidos_jugados  = models.IntegerField(default=0)
    partidos_ganados  = models.IntegerField(default=0)
    goles_marcados    = models.IntegerField(default=0)
    goles_recibidos   = models.IntegerField(default=0)
    ronda_alcanzada   = models.IntegerField(default=0)
    campeon           = models.BooleanField(default=False)

    def __str__(self):
        return f"Stats torneo {self.torneo.id} — {self.usuario.username}"