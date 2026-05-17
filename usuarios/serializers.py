from rest_framework import serializers
from .models import Usuario

class RegistroSerializer(serializers.ModelSerializer):
    password         = serializers.CharField(write_only=True, min_length=6)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model  = Usuario
        fields = ['username', 'email', 'password', 'confirm_password']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Las contraseñas no coinciden")
        if Usuario.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError("El email ya está en uso")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = Usuario.objects.create_user(
            username = validated_data['username'],
            email    = validated_data['email'],
            password = validated_data['password'],
        )
        return user


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Usuario
        fields = ['id', 'username', 'email', 'role']