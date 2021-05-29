from django import forms
from vapeking.store.models import Store

class StoreForm(forms.ModelForm):
    class Meta:
        model = Store
        fields = ("name", "products", "city")

        widgets = {
            'products': CheckboxSelectMultiple()
        }

        products = ModelMultipleChoiceField(
            queryset=Product.objects.all(),
            required=False
            )

    def __init__(self, *args, **kwargs):
        if 'instance' in kwargs:
            initial = kwargs.setdefault('initial', {})
            initial['products'] = [s.pk for s in kwargs['instance'].products.all()]

        ModelForm.__init__(self, *args, **kwargs)

    def save(self, commit=True):
        store = ModelForm.save(self, False)

        def save_m2m():
            new_products = self.cleaned_data['products']
            old_products = store.products.all()
        