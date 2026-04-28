from django.apps import AppConfig

class UsuariosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'usuarios'

    def ready(self):
        from .models import Usuario
        try:
            if not Usuario.objects.filter(username='Nico').exists():
                Usuario.objects.create_superuser(
                    username  = 'Nico',
                    email     = 'nico@admin.com',
                    password  = '20052722',
                    role      = 'admin',
                )
                print("✅ Admin 'Nico' creado automáticamente")
            else:
                Usuario.objects.filter(username='Nico').update(role='admin')
        except Exception:
            pass