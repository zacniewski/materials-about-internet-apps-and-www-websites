# Generated by Django 4.1.7 on 2023-03-17 14:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('history_tracker', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tracker',
            name='created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
