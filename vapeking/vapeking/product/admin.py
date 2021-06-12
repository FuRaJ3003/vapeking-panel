from django.contrib import admin
from .models import Product
from vapeking.type.models import Type


class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('get_name', 'get_price', 'get_type')

    def get_name(self, obj):
        return obj.name

    def get_type(self, obj):
        return obj.type

    def get_price(self, obj):
        return f"{obj.price} PLN"
    
    get_name.admin_order_field = 'name'
    get_name.short_description = "Nazwa"

    get_type.admin_order_field = 'type'
    get_type.short_description = 'Typ Produktu'

    get_price.admin_order_field = 'price'
    get_price.short_description = "Cena"

admin.site.register(Product, ProductAdmin)