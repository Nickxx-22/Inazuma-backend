from django.contrib import admin
from .models import Torneo, Partido, EstadisticasTorneo

@admin.register(Torneo)
class TorneoAdmin(admin.ModelAdmin):
    list_display  = ['id', 'usuario', 'estado', 'ronda_actual', 'creado_en']
    list_filter   = ['estado']

@admin.register(Partido)
class PartidoAdmin(admin.ModelAdmin):
    list_display  = ['id', 'torneo', 'ronda', 'equipo_local', 'goles_local', 'goles_visitante', 'equipo_visitante', 'resultado']
    list_filter   = ['resultado', 'ronda']

@admin.register(EstadisticasTorneo)
class EstadisticasTorneoAdmin(admin.ModelAdmin):
    list_display  = ['torneo', 'usuario', 'partidos_jugados', 'goles_marcados', 'campeon']