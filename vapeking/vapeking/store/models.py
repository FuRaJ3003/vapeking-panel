from django.db import models
from multiselectfield import MultiSelectField
from ..product.models import Product


class StoreManager(models.Manager):

    def create_store(self, name, products, city):
        if not name:
            raise ValueError('Sklep musi posiadać nazwe.')
        if not city:
            raise ValueError('Przydziel poprawną nazwę miasta swojego sklepu')

        try:
            store = self
            store.name = name
            store.products = products
            store.city = city

            store.create(name=store.name, products=store.products, city=store.city)
        
        except IntegrityError as error_message:
            print("This store has already been created:\n", error_message)

        def __str__(self):
            return self.name

class CitiesChoice(models.TextChoices):
        DEFAULT = "Default"
        SWIDNICA = "Świdnica"
        WROCLAW = "Wrocław"
        WALBRZYCH = "Wałbrzych"

class Store(models.Model):

    name          = models.CharField(max_length=30, blank=False, null=False)
    products      = models.ManyToManyField(Product, related_name='products', blank=True)
    city          = models.CharField(max_length=40, choices=CitiesChoice.choices, blank=False, null=False, default=CitiesChoice.DEFAULT)
    objects = StoreManager()

    def __str__(self):
        return f'Store: {self.name}'




