# Generated by Django 3.2.2 on 2021-05-13 07:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_alter_store_store_products'),
        ('user', '0003_user_u_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='u_store',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='store.store'),
            preserve_default=False,
        ),
    ]
