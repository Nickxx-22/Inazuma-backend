from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('partidos', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='estadisticastorneo',
            name='robos',
            field=models.JSONField(default=dict),
        ),
    ]
