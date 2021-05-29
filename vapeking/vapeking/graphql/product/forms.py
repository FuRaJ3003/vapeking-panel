from django import forms
from vapeking.product.models import Product

class ProductForm(forms.ModelForm):
    type = forms.ModelMultipleChoiceField(widget=forms.CheckboxSelectMultiple(), queryset=Type.objects.all())

     class Meta:
        model = Product
        fields = [
                'name',
                'type',
                'price'
               ]