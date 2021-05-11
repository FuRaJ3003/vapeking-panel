from django.db import models

class Type(models.Model):
    t_name = models.TextField(max_length=30, blank=False, null=False)
    