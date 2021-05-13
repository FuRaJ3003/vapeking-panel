import graphene

from .types import UserType
from vapeking.user.models import User

class UserQueries(graphene.ObjectType):
    user = graphene.Field(
        UserType, id=graphene.Argument(graphene.ID, description="ID of User.")
    )

    def resolve_user(self, _info, id):
        return User.objects.filter(id=id).first()

    def resolve_users(self, _info):
        return User.objects.all()

