from django.urls import path
from .views import (
    CrearTorneoView, SimularPartidoView,
    TorneoDetailView, HistorialTorneosView,
)

urlpatterns = [
    path('torneos/',                         CrearTorneoView.as_view()),
    path('torneos/historial/',               HistorialTorneosView.as_view()),
    path('torneos/<int:torneo_id>/',         TorneoDetailView.as_view()),
    path('torneos/<int:torneo_id>/simular/', SimularPartidoView.as_view()),
]