from django.contrib import admin
from .models import Product
from vapeking.type.models import Type



class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('get_name', 'get_price', 'get_type')

    def get_name(self, obj):
        return obj.p_name

    def get_type(self, obj):
        return obj.p_type

    def get_price(self, obj):
        return obj.p_price
    
    get_name.admin_order_field = 'p_name'
    get_name.short_description = "Nazwa"

    get_type.admin_order_field = 't_name'
    get_type.short_description = 'Typ Produktu'

    get_price.admin_order_field = 'p_price'
    get_price.short_description = "Cena"

    # def get_price(self, obj):
    # #     return obj.Product.p_price

    # get_type.short_description = 'Typ'
    # get_price.short_description = 'Cena'

admin.site.register(Product, ProductAdmin)