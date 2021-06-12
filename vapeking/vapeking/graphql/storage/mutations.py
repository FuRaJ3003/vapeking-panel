import graphene
from .types import StorageType, StorageStockType
from ...storage.models import Storage, StorageStock
from ..core.utils import manager_member_required, admin_member_required

class StorageStockCreateInput(graphene.InputObjectType):
    quantity = graphene.Int(required=True)
    product_id = graphene.ID(required=True)
    storage_id = graphene.ID(required=True)


class StorageCreateInput(graphene.InputObjectType):
    name = graphene.String(required=True)
    store_id = graphene.ID(required=True)
    stocks = graphene.List(StorageStockCreateInput, required=False)


class StorageCreate(graphene.Mutation):
    storage = graphene.Field(StorageType)

    class Arguments:
        input = StorageCreateInput(required=True)

    @classmethod
    def clean_input(cls, input):
        # TODO : Validation
        return input

    @classmethod
    @admin_member_required
    def mutate(cls, root, info, input):
        cleaned_input = cls.clean_input(input)

        stocks = cleaned_input.pop('stocks')
        storage = Storage.objects.create(**cleaned_input)

        if stocks: 
            storage_stocks = []

            for stock in stocks:
                storage_stocks.append(StorageStock(storage_id=storage.id, **stock))

            storage.stocks.bulk_create(storage_stocks)
        
        return StorageCreate(storage=storage)       


class StorageStockCreate(graphene.Mutation):
    storage_stock = graphene.Field(StorageStockType)

    class Arguments:
        input = StorageStockCreateInput(required=True)

    @classmethod
    def clean_input(cls, input):
        # TODO : Validation
        return input

    @classmethod
    @manager_member_required
    def mutate(cls, root, info, input):
        cleaned_input = cls.clean_input(input)

        storage_id = input.get('storage_id')
        if storage_id:
            product_id = input.get('product_id')
            quantity = input.get('quantity')
            storage = Storage.objects.get(id=storage_id)

            try:
                stock = storage.storagestock_set.get(product_id=product_id)
            
            except StorageStock.DoesNotExist:
                storage_stock = StorageStock.objects.create(**cleaned_input)

            except StorageStock.MultipleObjectsReturned:
                storage.storagestock_set.filter(product_id=product_id).delete()
                storage_stock = StorageStock.objects.create(**cleaned_input)

            else:
                stock.quantity += quantity
                stock.save(update_fields=['quantity'])
                return
    


    