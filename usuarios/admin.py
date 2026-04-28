from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    list_display  = ['username', 'email', 'role', 'is_staff']
    list_filter   = ['role', 'is_staff']
    fieldsets     = UserAdmin.fieldsets + (
        ('Inazuma', {'fields': ('role', 'favoritos', 'favoritos_tecnicas')}),
    )