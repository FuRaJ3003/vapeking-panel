import graphene

from .types import StorageType, StorageStockType
from ...storage.models import Storage, StorageStock
from  .mutations import StorageCreate, StorageStockCreate

class StorageQueries(graphene.ObjectType):
    storage = graphene.Field(
        StorageType,
        id=graphene.Argument(graphene.ID, description="ID of storage.")
    )
    storages = graphene.List(StorageType)
    storage_stock = graphene.Field(
        StorageStockType,
        id=graphene.Argument(graphene.ID, description="ID of storage stock."),
    )
    storage_stocks = graphene.List(StorageStockType)

    def resolve_storage(self, _info, id):
        return Storage.objects.filter(id=id).first()

    def resolve_storages(self, _info):
        return Checkout.objects.all()

    def resolve_storage_by_shop(self, info, shop)