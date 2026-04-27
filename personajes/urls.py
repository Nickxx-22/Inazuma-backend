from rest_framework.routers import DefaultRouter
from .views import PersonajeViewSet

router = DefaultRouter()
router.register(r'personajes', PersonajeViewSet)

urlpatterns = router.urls