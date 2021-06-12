import graphene
from .types import StoreType
from vapeking.store.models import Store
from ..core.utils import staff_member_required, admin_member_required

class StoreQueries(graphene.ObjectType):
    store = graphene.Field(
        StoreType, id=graphene.Argument(graphene.ID, description="ID of Store.")
    )
    
    @staff_member_required
    def resolve_store(self, _info, id):
        return Store.objects.filter(id=id).first()

    @admin_member_required
    def resolve_stores(self, _info):
        return Store.objects.all()
