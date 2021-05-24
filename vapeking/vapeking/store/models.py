from django.db import models
from multiselectfield import MultiSelectField
from ..product.models import Product

class Store(models.Model):


    class CitiesChoice(models.TextChoices):
        SWIDNICA = "Świdnica"
        WROCLAW = "Wrocław"

    store_name          = models.CharField(max_length=30, null=False, blank=False)
    store_products      = models.ForeignKey(Product, blank=True, null=True, on_delete=models.CASCADE)
    store_city          = models.CharField(blank=False, choices=CitiesChoice.choices, max_length=40)
    # store_storage_id    = models.ForeignKey()

    def __str__(self):
        return f'Store: {self.store_name}'