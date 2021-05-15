from django.db import models
from multiselectfield import MultiSelectField


class Store(models.Model):

    class ProductChoice(models.IntegerChoices):
        pass

    class CitiesChoice(models.TextChoices):
        SWIDNICA = "Świdnica"
        WROCLAW = "Wrocław"

    store_name          = models.CharField(max_length=30, null=False, blank=False)
    store_products      = MultiSelectField(blank=True, choices=ProductChoice.choices)
    store_city          = models.CharField(blank=False, choices=CitiesChoice.choices, max_length=40)
    # store_storage_id    = models.ForeignKey()

    def __str__(self):
        return f'Store: {self.store_name}'