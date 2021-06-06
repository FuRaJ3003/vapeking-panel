import graphene
from .types import StorageType, StorageStockType
from ...storage.models import Storage, StorageStock

class StorageStockCreateInput(graphene.InputObjectType):
    quantity = graphene.Int(required=True)
    product_id = graphene.ID(required=True)
    storage_id = graphene.ID(required=True)


class StorageCreateInput(graphene.InputObjectType):
    name = graphene.String(required=True)
    store_id = graphene.ID(required=True)
    stocks = graphene.List(StorageStockCreateInput, required=True)


class StorageCreate(graphene.Mutation):
    storage = graphene.Field(CheckoutType)

    class Arguments:
        input = StorageCreateInput(required=True)

    @classmethod
    def clean_input(cls, input):
        # TODO : Validation
        return input

    @classmethod
    def mutate(cls, root, info, input):
        cleaned_input = cls.clean_input(input)

        stocks = cleaned_input.pop('stocks')
        storage = Storage.objects.create(**cleaned_input)
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
    def mutate(cls, root, info, input)
        cleaned_input = cls.clean_input(input)

        storage_id = input.get('storage_id')

        if storage_id:
            product_id = input.get('product_id')
            quantity = input.get('quantity')
            storage = Storage.objects.get(id=storage_id)

            try:
                stock = storage.stocks.get(product_id=product_id)
            
            except CheckoutLine.DoesNotExist:

    


    