# Generated by Django 3.2.2 on 2021-05-11 19:21

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('store_name', models.CharField(max_length=30)),
                ('store_products', multiselectfield.db.fields.MultiSelectField(choices=[], max_length=200)),
                ('store_city', models.CharField(choices=[('Świdnica', 'Swidnica'), ('Wrocław', 'Wroclaw')], max_length=40)),
            ],
        ),
    ]
