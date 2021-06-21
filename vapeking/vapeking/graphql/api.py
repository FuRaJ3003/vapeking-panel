import graphene

from .user.schema import UserQueries, UserMutations
from .store.schema import StoreQueries
from .product.schema import ProductQueries
from .storage.schema import StorageQueries, StorageMutations
from .user.authenticate import AuthenticateMutations

class Query(UserQueries, StoreQueries, StorageQueries):
    pass

class Mutations(StorageMutations, AuthenticateMutations, UserMutations):
    pass

schema = graphene.Schema(query=Query, mutation=Mutations)


