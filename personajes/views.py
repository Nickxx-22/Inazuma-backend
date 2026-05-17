from rest_framework import viewsets, filters
from .models import Personaje
from .serializers import PersonajeSerializer

class PersonajeViewSet(viewsets.ModelViewSet):
    queryset         = Personaje.objects.all()
    serializer_class = PersonajeSerializer
    filter_backends  = [filters.SearchFilter, filters.OrderingFilter]
    search_fields    = ['nombre', 'slug', 'posicion', 'elemento', 'naturaleza']
    ordering_fields  = ['nombre', 'poder']