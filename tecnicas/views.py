from rest_framework import viewsets, filters
from .models import Tecnica
from .serializers import TecnicaSerializer

class TecnicaViewSet(viewsets.ModelViewSet):
    queryset         = Tecnica.objects.all()
    serializer_class = TecnicaSerializer
    filter_backends  = [filters.SearchFilter, filters.OrderingFilter]
    search_fields    = ['nombre', 'slug', 'elemento', 'tipo']
    ordering_fields  = ['nombre', 'poder_base']