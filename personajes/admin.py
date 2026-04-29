from django.contrib import admin
from .models import Personaje
from tecnicas.models import Tecnica


class TecnicaCreadorInline(admin.TabularInline):
    model = Tecnica.creadores.through
    extra = 0
    verbose_name = "Técnica (creador)"
    verbose_name_plural = "Técnicas creadas"


class TecnicaHerederoInline(admin.TabularInline):
    model = Tecnica.herederos.through
    extra = 0
    verbose_name = "Técnica (heredero)"
    verbose_name_plural = "Técnicas heredadas"


class TecnicaCopiaInline(admin.TabularInline):
    model = Tecnica.copias.through
    extra = 0
    verbose_name = "Técnica (copia)"
    verbose_name_plural = "Técnicas copiadas"


@admin.register(Personaje)
class PersonajeAdmin(admin.ModelAdmin):
    list_display  = ['nombre', 'posicion', 'elemento', 'poder']
    search_fields = ['nombre', 'slug']
    list_filter   = ['posicion', 'elemento']

    inlines = [
        TecnicaCreadorInline,
        TecnicaHerederoInline,
        TecnicaCopiaInline
    ]