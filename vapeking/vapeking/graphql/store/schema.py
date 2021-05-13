import graphene
from .types import StoreType
from vapeking.store.models import Store

class StoreQueries(graphene.ObjectType):
    store = graphene.Field(
        StoreType, id=graphene.Argument(graphene.ID, description="ID of Store.")
    )

    def resolve_store(self, _info, id):
        return Store.objects.filter(id=id).first()

    def resolve_stores(self, _info):
        return Store.objects.all()
