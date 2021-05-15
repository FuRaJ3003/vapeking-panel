from django.db import models
from vapeking.type.models import Type

class Product(models.Model):
    p_name = models.CharField(max_length=100, null=False, blank=False)
    p_type = models.ForeignKey(Type, related_name='type', default="Inne", on_delete=models.CASCADE)
    p_price = models.FloatField(null=False, blank=False)

    def __str__(self):
        return f'Product: {self.p_name}'


