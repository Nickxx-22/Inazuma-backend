from rest_framework import serializers
from .models import Personaje
from tecnicas.models import Tecnica


class TecnicaRelacionadaSerializer(serializers.Serializer):
    """Serializa una técnica relacionada a un personaje."""
    technique_id = serializers.CharField(source='slug')
    nombre = serializers.CharField()
    relation = serializers.SerializerMethodField()
    poder_base = serializers.IntegerField()
    subtipo = serializers.JSONField()
    video_path = serializers.CharField()

    def get_relation(self, obj):
        """Determina la relación (creador, heredero, copia) del personaje con la técnica."""
        personaje = self.context.get('personaje')
        if not personaje:
            return 'desconocida'

        if personaje.tecnicas_creadas.filter(id=obj.id).exists():
            return 'creador'
        elif personaje.tecnicas_heredadas.filter(id=obj.id).exists():
            return 'heredero'
        elif personaje.tecnicas_copiadas.filter(id=obj.id).exists():
            return 'copia'
        return 'desconocida'


class PersonajeSerializer(serializers.ModelSerializer):
    techniques = serializers.SerializerMethodField()

    class Meta:
        model  = Personaje
        fields = '__all__'

    def get_techniques(self, obj):
        """Devuelve las técnicas relacionadas al personaje."""
        tecnicas_creadas = obj.tecnicas_creadas.all()
        tecnicas_heredadas = obj.tecnicas_heredadas.all()
        tecnicas_copiadas = obj.tecnicas_copiadas.all()

        tecnicas = []

        # Añadir técnicas creadas
        for tecnica in tecnicas_creadas:
            tecnicas.append({
                'technique_id': tecnica.slug,
                'nombre': tecnica.nombre,
                'relation': 'creador',
                'poder_base': tecnica.poder_base,
                'subtipo': tecnica.subtipo,
                'video_path': tecnica.video_path,
            })

        # Añadir técnicas heredadas
        for tecnica in tecnicas_heredadas:
            tecnicas.append({
                'technique_id': tecnica.slug,
                'nombre': tecnica.nombre,
                'relation': 'heredero',
                'poder_base': tecnica.poder_base,
                'subtipo': tecnica.subtipo,
                'video_path': tecnica.video_path,
            })

        # Añadir técnicas copiadas
        for tecnica in tecnicas_copiadas:
            tecnicas.append({
                'technique_id': tecnica.slug,
                'nombre': tecnica.nombre,
                'relation': 'copia',
                'poder_base': tecnica.poder_base,
                'subtipo': tecnica.subtipo,
                'video_path': tecnica.video_path,
            })

        return tecnicas
