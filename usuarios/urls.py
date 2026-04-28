from django.urls import path
from .views import (
    RegistroView, LoginView, MeView,
    ToggleFavoritoView, FavoritosView,
    ToggleFavoritoTecnicaView, FavoritosTecnicasView,
    EquiposUsuarioView,
    AdminUsuariosView, AdminUsuarioDetailView, AdminCambiarRolView,
)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('registro/',                       RegistroView.as_view()),
    path('login/',                          LoginView.as_view()),
    path('me/',                             MeView.as_view()),
    path('token/refresh/',                  TokenRefreshView.as_view()),
    path('favoritos/',                      FavoritosView.as_view()),
    path('favoritos/toggle/',               ToggleFavoritoView.as_view()),
    path('favoritos/tecnicas/',             FavoritosTecnicasView.as_view()),
    path('favoritos/tecnicas/toggle/',      ToggleFavoritoTecnicaView.as_view()),
    path('mis-equipos/',                    EquiposUsuarioView.as_view()),
    path('admin/usuarios/',                 AdminUsuariosView.as_view()),
    path('admin/usuarios/<int:user_id>/',   AdminUsuarioDetailView.as_view()),
    path('admin/usuarios/<int:user_id>/rol/', AdminCambiarRolView.as_view()),
]