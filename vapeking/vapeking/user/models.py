from django.db import models
from django import forms

class User(models.Model):
    u_name = models.CharField(max_length=30, null=False, blank=False)
    u_surename = models.CharField(max_length=30, null=False, blank=False)
    u_password = forms.CharField(widget=forms.PasswordInput)
    u_power_flag = models.DecimalField(blank=False, decimal_places=1, max_digits=1)
    # u_store = models.ForeignKey("app.Model", verbose_name=_(""), on_delete=models.CASCADE)
