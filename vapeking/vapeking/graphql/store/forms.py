from django import forms
from vapeking.store.models import Store

class StoreForm(forms.ModelForm):
    class Meta:
        model = Store
        fields = ("store_name", "store_products", "store_city")