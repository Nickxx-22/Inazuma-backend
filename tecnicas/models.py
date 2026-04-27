from django.db import models
from personajes.models import Personaje

class Tecnica(models.Model):
    TIPOS = [
        ('shot', 'Tiro'),
        ('save', 'Parada'),
        ('dribble', 'Regate'),
        ('defense', 'Bloqueo'),
        ('defense', 'Quitar'),
        ('combo', 'Combo'),
    ]
    ELEMENTOS = [
        ('Fuego', 'Fuego'),
        ('Montaña', 'Montaña'),
        ('Aire', 'Aire'),
        ('Bosque', 'Bosque'),
    ]
    SUBTYPES = [
        ('tiro', 'Tiro'),
        ('parada', 'Parada'),
        ('defense', 'Bloqueo'),
        ('defense', 'Quitar'),
        ('regate', 'Regate'),
        ('combo', 'Combo'),
    ]

    # Identificador
    slug            = models.CharField(max_length=100, unique=True)  # ej: "Omnisabiduria_divina"

    # Info básica
    nombre          = models.CharField(max_length=100)
    tipo            = models.CharField(max_length=20, choices=TIPOS)
    subtipo         = models.JSONField(default=list)  # ["tiro"], ["combo", "tiro"]...
    elemento        = models.CharField(max_length=20, choices=ELEMENTOS, blank=True)
    imagen_elemento = models.CharField(max_length=255, blank=True)

    # Video
    video_url       = models.CharField(max_length=255, blank=True)

    # Potencia y coste
    poder_base      = models.IntegerField(default=0)
    coste_stamina   = models.IntegerField(default=0)
    coste_tension   = models.IntegerField(default=0)

    # Relaciones con personajes
    creadores       = models.ManyToManyField(
        Personaje, related_name='tecnicas_creadas', blank=True
    )
    herederos       = models.ManyToManyField(
        Personaje, related_name='tecnicas_heredadas', blank=True
    )
    copias          = models.ManyToManyField(
        Personaje, related_name='tecnicas_copiadas', blank=True
    )

    def __str__(self):
        return f"{self.nombre} ({self.slug})"