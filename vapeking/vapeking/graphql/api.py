import graphene

from .user.schema import UserQueries

class Query(UserQueries):
    pass

schema = graphene.Schema(query=Query)


