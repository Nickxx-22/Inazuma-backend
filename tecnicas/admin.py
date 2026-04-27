from django.contrib import admin
from .models import Tecnica

@admin.register(Tecnica)
class TecnicaAdmin(admin.ModelAdmin):
    list_display  = ['nombre', 'tipo', 'elemento', 'poder_base']
    search_fields = ['nombre', 'slug']
    list_filter   = ['tipo', 'elemento']