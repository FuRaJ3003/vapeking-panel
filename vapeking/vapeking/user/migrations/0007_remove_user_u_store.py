# Generated by Django 3.2.2 on 2021-05-13 07:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_alter_user_u_store'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='u_store',
        ),
    ]