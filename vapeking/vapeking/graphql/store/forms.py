from django import forms
from vapeking.store.models import Store

class StoreForm(forms.ModelForm):
    class Meta:
        model = Store
        fields = ("name", "products", "city")