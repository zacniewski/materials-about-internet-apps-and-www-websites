# Generated by Django 4.1.7 on 2023-03-17 17:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('history_tracker', '0002_alter_tracker_created'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tracker',
            old_name='created',
            new_name='changed',
        ),
    ]
