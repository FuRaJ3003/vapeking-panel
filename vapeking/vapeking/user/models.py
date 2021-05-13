from django.db import models
from django import forms
from ..store.models import Store

class User(models.Model):

    class Powers(models.IntegerChoices):
        UNACTIVE = 0
        EMPLOYEE = 1
        MANAGER  = 2
        ADMIN    = 3
        # __empty__ = _('(Unknown)')

    u_name = models.CharField(max_length=30, null=False, blank=False)
    u_surename = models.CharField(max_length=30, null=False, blank=False)
    u_password = models.CharField(max_length=100, null=False, blank=False)
    u_power_flag = models.IntegerField(blank=False, choices=Powers.choices)
    u_store = models.OneToOneField(Store, on_delete=models.CASCADE, default=0)

    def __str__(self):
        return self.u_name

    
