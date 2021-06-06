import graphene
from graphene_django import DjangoObjectType

from ...storage.models import Storage, StorageStock

class StorageType(DjangoObjectType):
    class Meta:
        model = Storage
        fields = '__all__'

    
class StorageStockType(DjangoObjectType):
    class Meta:
        model = StorageStock
        fields = '__all__'
    