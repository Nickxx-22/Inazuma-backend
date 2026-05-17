from django.db import models

class Personaje(models.Model):
    ELEMENTOS = [
        ('Fuego', 'Fuego'),
        ('Montaña', 'Montaña'),
        ('Aire', 'Aire'),
        ('Bosque', 'Bosque'),
    ]
    POSICIONES = [
        ('GK', 'Portero'),
        ('DF', 'Defensa'),
        ('MD', 'Centrocampista'),
        ('FW', 'Delantero'),
    ]
    NATURALEZAS = [
        ('Justicia', 'Justicia'),
        ('Tension', 'Tensión'),
        ('Contraataque', 'Contraataque'),
        ('Afinidad', 'Afinidad'),
        ('Brecha', 'Brecha'),
        ('Juego Sucio', 'Juego Sucio'),
    ]
    TIERS = [
        ('S+', 'S+'), ('S', 'S'), ('A', 'A'), ('B', 'B')
    ]
    SEXOS = [
        ('M', 'Masculino'), ('F', 'Femenino'),
    ]

    # Identificador
    slug            = models.CharField(max_length=100, unique=True)  # ej: "Byron_Love_T1"

    # Info básica
    nombre          = models.CharField(max_length=100)
    sexo            = models.CharField(max_length=1, choices=SEXOS, default='M')
    posicion        = models.CharField(max_length=5, choices=POSICIONES)
    elemento        = models.CharField(max_length=20, choices=ELEMENTOS)
    naturaleza      = models.CharField(max_length=20, choices=NATURALEZAS, blank=True)
    tier            = models.CharField(max_length=2, choices=TIERS, blank=True)
    es_capitan      = models.BooleanField(default=False)

    # Edad y origen
    grupo_edad      = models.CharField(max_length=50, blank=True)   # Junior, Senior...
    curso           = models.CharField(max_length=50, blank=True)   # Middle School...
    pais            = models.CharField(max_length=50, blank=True)

    # Imágenes
    imagen          = models.CharField(max_length=255, blank=True)  # /img/jugadores/...
    imagen_detalle  = models.CharField(max_length=255, blank=True)  # /img/jugadoresID/...
    imagen_posicion = models.CharField(max_length=255, blank=True)
    imagen_elemento = models.CharField(max_length=255, blank=True)
    imagen_pais     = models.CharField(max_length=255, blank=True)

    # Stats de juego
    poder           = models.IntegerField(default=0)
    control         = models.IntegerField(default=0)
    tecnica         = models.IntegerField(default=0)
    presion         = models.IntegerField(default=0)
    fisico          = models.IntegerField(default=0)
    agilidad        = models.IntegerField(default=0)
    inteligencia    = models.IntegerField(default=0)
    remate          = models.IntegerField(default=0)
    defensa         = models.IntegerField(default=0)
    disputa         = models.IntegerField(default=0)

    # Stats de partido
    stamina         = models.IntegerField(default=100)
    tension         = models.IntegerField(default=100)

    def __str__(self):
        return f"{self.nombre} ({self.slug})"