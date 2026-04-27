from django.contrib.auth.models import AbstractUser
from django.db import models
from personajes.models import Personaje
from tecnicas.models import Tecnica

class Usuario(AbstractUser):
    ROLES = [
        ('user',   'Usuario'),
        ('admin',  'Administrador'),
        ('banned', 'Baneado'),
    ]
    role                = models.CharField(max_length=10, choices=ROLES, default='user')
    favoritos           = models.ManyToManyField(Personaje, related_name='favoritos_de', blank=True)
    favoritos_tecnicas  = models.ManyToManyField(Tecnica,   related_name='favoritos_de', blank=True)

    def __str__(self):
        return f"{self.username} ({self.role})"