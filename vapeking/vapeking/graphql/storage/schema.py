import graphene

from .types import StorageType, StorageStockType
from ...storage.models import Storage, StorageStock
from  .mutations import StorageCreate, StorageStockCreate
from ..core.utils import staff_member_required

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

    @staff_member_required
    def resolve_storage(self, _info, id):
        return Storage.objects.filter(id=id).first()

    @staff_member_required
    def resolve_storages(self, _info):
        return Storage.objects.all()

    @staff_member_required
    def resolve_storage_stock(self, _info, id):
        return StorageStock.objects.filter(id=id).first()

    @staff_member_required
    def resolve_storage_stocks(self, _info):
        return StorageStock.objects.all()

    # def resolve_storage_by_shop(self, info, shop) TODO

class StorageMutations(graphene.ObjectType):
    storage_create = StorageCreate.Field()
    storage_stock_create = StorageStockCreate.Field()

