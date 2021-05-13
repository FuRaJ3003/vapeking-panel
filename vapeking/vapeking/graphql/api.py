import graphene

from .user.schema import UserQueries
from .store.schema import StoreQueries

class Query(UserQueries, StoreQueries):
    pass

schema = graphene.Schema(query=Query)


