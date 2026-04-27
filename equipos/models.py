from django.db import models
from personajes.models import Personaje

class Equipo(models.Model):
    CATEGORIAS = [
        ('Junior', 'Junior'),
        ('Senior', 'Senior'),
    ]

    # Identificador
    slug            = models.CharField(max_length=100, unique=True)  # ej: "Raimon_T1"

    # Info básica
    nombre          = models.CharField(max_length=100)
    pais            = models.CharField(max_length=100, blank=True)
    academia        = models.CharField(max_length=100, blank=True)
    categoria       = models.CharField(max_length=20, choices=CATEGORIAS, blank=True)
    color_principal = models.CharField(max_length=7, blank=True)   # ej: "#1E90FF"

    # Imágenes
    imagen          = models.CharField(max_length=255, blank=True)

    # Entrenador (referencia al slug, por si no está en BD todavía)
    entrenador_slug = models.CharField(max_length=100, blank=True, null=True)

    # Temporadas
    temporadas      = models.JSONField(default=list)   # ["Season_T1", "Season_T2"...]

    # Jugadores
    jugadores       = models.ManyToManyField(
        Personaje, related_name='equipos', blank=True
    )

    def __str__(self):
        return f"{self.nombre} ({self.slug})"