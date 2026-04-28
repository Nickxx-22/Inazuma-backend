from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import Usuario
from .serializers import RegistroSerializer, UsuarioSerializer
from personajes.models import Personaje
from tecnicas.models import Tecnica

class RegistroView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegistroSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'message': 'Registro exitoso',
                'token':   str(refresh.access_token),
                'usuario': UsuarioSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'message': 'Usuario y contraseña son obligatorios'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(username=username, password=password)
        if not user:
            return Response(
                {'message': 'Usuario o contraseña incorrectos'},
                status=status.HTTP_401_UNAUTHORIZED
            )

        refresh = RefreshToken.for_user(user)
        return Response({
            'message': f'Bienvenido, {user.username}!',
            'token':   str(refresh.access_token),
            'refresh': str(refresh),
            'usuario': UsuarioSerializer(user).data
        })


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(UsuarioSerializer(request.user).data)


# ── FAVORITOS JUGADORES ──────────────────────────────────────────
class ToggleFavoritoView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        slug = request.data.get('slug')
        if not slug:
            return Response({'message': 'Falta el slug'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            personaje = Personaje.objects.get(slug=slug)
        except Personaje.DoesNotExist:
            return Response({'message': 'Personaje no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        user = request.user
        if personaje in user.favoritos.all():
            user.favoritos.remove(personaje)
            return Response({'message': 'Quitado de favoritos', 'isFavorite': False})
        else:
            user.favoritos.add(personaje)
            return Response({'message': 'Añadido a favoritos', 'isFavorite': True})


class FavoritosView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        favoritos = request.user.favoritos.values('slug', 'nombre', 'elemento', 'posicion', 'poder')
        return Response(list(favoritos))


# ── FAVORITOS TÉCNICAS ───────────────────────────────────────────
class ToggleFavoritoTecnicaView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        slug = request.data.get('slug')
        if not slug:
            return Response({'message': 'Falta el slug'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            tecnica = Tecnica.objects.get(slug=slug)
        except Tecnica.DoesNotExist:
            return Response({'message': 'Técnica no encontrada'}, status=status.HTTP_404_NOT_FOUND)

        user = request.user
        if tecnica in user.favoritos_tecnicas.all():
            user.favoritos_tecnicas.remove(tecnica)
            return Response({'message': 'Quitada de favoritos', 'isFavorite': False})
        else:
            user.favoritos_tecnicas.add(tecnica)
            return Response({'message': 'Añadida a favoritos', 'isFavorite': True})


class FavoritosTecnicasView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        favoritos = request.user.favoritos_tecnicas.values('slug', 'nombre', 'elemento', 'tipo', 'poder_base')
        return Response(list(favoritos))


# ── EQUIPOS DE USUARIO ───────────────────────────────────────────
class EquiposUsuarioView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(request.user.equipos_guardados)

    def post(self, request):
        nombre = request.data.get('nombre_equipo', 'Mi Equipo')
        slots  = request.data.get('equipo', [])

        if not slots:
            return Response({'message': 'Falta el equipo'}, status=status.HTTP_400_BAD_REQUEST)

        user = request.user
        if not hasattr(user, 'equipos_guardados') or user.equipos_guardados is None:
            user.equipos_guardados = {}

        user.equipos_guardados[nombre] = slots
        user.save()
        return Response({'message': 'Equipo guardado correctamente'})

    def delete(self, request):
        nombre = request.data.get('nombre_equipo')
        if not nombre:
            return Response({'message': 'Falta el nombre del equipo'}, status=status.HTTP_400_BAD_REQUEST)

        user = request.user
        if nombre in user.equipos_guardados:
            del user.equipos_guardados[nombre]
            user.save()
            return Response({'message': 'Equipo eliminado', 'equipos': user.equipos_guardados})
        return Response({'message': 'Equipo no encontrado'}, status=status.HTTP_404_NOT_FOUND)


        # ── PANEL ADMIN ─────────────────────────────────────────────────
class AdminUsuariosView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if request.user.role != 'admin':
            return Response({'message': 'Acceso denegado'}, status=status.HTTP_403_FORBIDDEN)

        usuarios = Usuario.objects.all().values(
            'id', 'username', 'email', 'role', 'date_joined'
        )
        result = []
        for u in usuarios:
            user_obj = Usuario.objects.get(id=u['id'])
            result.append({
                'id':                  u['id'],
                'username':            u['username'],
                'email':               u['email'],
                'role':                u['role'],
                'createdAt':           str(u['date_joined']),
                'favoritos':           user_obj.favoritos.count(),
                'favoritos_tecnicas':  user_obj.favoritos_tecnicas.count(),
                'equipos':             len(user_obj.equipos_guardados),
            })
        return Response({'usuarios': result})


class AdminUsuarioDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, user_id):
        if request.user.role != 'admin':
            return Response({'message': 'Acceso denegado'}, status=status.HTTP_403_FORBIDDEN)
        try:
            u = Usuario.objects.get(id=user_id)
            return Response({
                'id':                 u.id,
                'username':           u.username,
                'email':              u.email,
                'role':               u.role,
                'createdAt':          str(u.date_joined),
                'favoritos':          list(u.favoritos.values('slug', 'nombre')),
                'favoritos_tecnicas': list(u.favoritos_tecnicas.values('slug', 'nombre')),
                'equipos':            u.equipos_guardados,
            })
        except Usuario.DoesNotExist:
            return Response({'message': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, user_id):
        if request.user.role != 'admin':
            return Response({'message': 'Acceso denegado'}, status=status.HTTP_403_FORBIDDEN)
        try:
            u = Usuario.objects.get(id=user_id)
            if u.role == 'admin':
                return Response({'message': 'No puedes eliminar un admin'}, status=status.HTTP_400_BAD_REQUEST)
            u.delete()
            return Response({'message': 'Usuario eliminado'})
        except Usuario.DoesNotExist:
            return Response({'message': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)


class AdminCambiarRolView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request, user_id):
        if request.user.role != 'admin':
            return Response({'message': 'Acceso denegado'}, status=status.HTTP_403_FORBIDDEN)

        new_role = request.data.get('role')
        if new_role not in ('user', 'admin', 'banned'):
            return Response({'message': 'Rol inválido'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            u = Usuario.objects.get(id=user_id)
            u.role = new_role
            u.save()
            return Response({'message': f'Rol actualizado a {new_role}'})
        except Usuario.DoesNotExist:
            return Response({'message': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)