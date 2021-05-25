from django.db import models
from vapeking.type.models import Type

class Product(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    type = models.ForeignKey(Type, related_name='types', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=8, decimal_places=2, null=False, blank=False, default=0.00)

    def __str__(self):
        return f'Product: {self.name}PLN'


