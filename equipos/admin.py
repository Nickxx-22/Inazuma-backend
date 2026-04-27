from django.contrib import admin
from .models import Equipo

@admin.register(Equipo)
class EquipoAdmin(admin.ModelAdmin):
    list_display  = ['nombre', 'pais', 'categoria', 'academia']
    search_fields = ['nombre', 'slug']
    list_filter   = ['categoria', 'pais']