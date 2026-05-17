from rest_framework.routers import DefaultRouter
from .views import TecnicaViewSet

router = DefaultRouter()
router.register(r'tecnicas', TecnicaViewSet)

urlpatterns = router.urls