import graphene
from .types import ProductType
from vapeking.product.models import Product

class ProductQueries(graphene.ObjectType):
    product = graphene.Field(
        ProductType, id=graphene.Argument(graphene.ID, description="ID of Product.")
    )

    def resolve_product(self, _info, id):
        return Product.objects.filter(id=id).first()

    def resolve_products(self, _info):
        return Product.objects.all()
