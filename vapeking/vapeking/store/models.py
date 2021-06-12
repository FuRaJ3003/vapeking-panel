from django.db import models
from multiselectfield import MultiSelectField
from ..product.models import Product

class Store(models.Model):

    class CitiesChoice(models.TextChoices):
        SWIDNICA = "Świdnica"
        WROCLAW = "Wrocław"

    name          = models.CharField(max_length=30, blank=False, null=False)
    products      = models.ManyToManyField(Product, related_name='products', blank=True)
    city          = models.CharField(max_length=40, choices=CitiesChoice.choices, blank=False, null=False)
    
    def __str__(self):
        return f'Store: {self.name}'


