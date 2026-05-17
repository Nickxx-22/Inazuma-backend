from rest_framework import viewsets, filters
from .models import Equipo
from .serializers import EquipoSerializer

class EquipoViewSet(viewsets.ModelViewSet):
    queryset         = Equipo.objects.all()
    serializer_class = EquipoSerializer
    filter_backends  = [filters.SearchFilter, filters.OrderingFilter]
    search_fields    = ['nombre', 'slug', 'pais']
    ordering_fields  = ['nombre']