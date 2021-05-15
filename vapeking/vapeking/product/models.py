from django.db import models
from vapeking.type.models import Type

class Product(models.Model):
    p_name = models.CharField(max_length=100, null=False, blank=False)
    p_type = models.ManyToManyField(Type, related_name='type', default="Inne")
    p_price = models.FloatField(null=False, blank=False)


