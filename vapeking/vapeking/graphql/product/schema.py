import graphene
from .types import ProductType
from vapeking.product.models import Product
from .core.utils import manager_member_required

class ProductQueries(graphene.ObjectType):
    product = graphene.Field(
        ProductType, id=graphene.Argument(graphene.ID, description="ID of Product.")
    )

    @manager_member_required
    def resolve_product(self, _info, id):
        return Product.objects.filter(id=id).first()

    @manager_member_required
    def resolve_products(self, _info):
        return Product.objects.all()
