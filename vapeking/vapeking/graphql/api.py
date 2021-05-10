import graphene

from .users.schema import UserQueries

class Query(UserQueries):
    pass

schema = graphene.Schema(query=Query)


