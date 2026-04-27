from django.contrib import admin
from .models import Personaje

@admin.register(Personaje)
class PersonajeAdmin(admin.ModelAdmin):
    list_display  = ['nombre', 'posicion', 'elemento', 'poder']
    search_fields = ['nombre', 'slug']
    list_filter   = ['posicion', 'elemento']