from django.db import models
from ..store.models import Store
from ..product.models import Product

class Storage(models.Model):
    name = models.CharField(max_length=20, blank=True, null=True) 
    store = models.ForeignKey(Store, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return f"{self.name} ({self.store})"


class StorageStock(models.Model):
    storage = models.ForeignKey(Storage, on_delete=models.CASCADE, blank=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=False)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.product.name} ({self.storage.name})"



