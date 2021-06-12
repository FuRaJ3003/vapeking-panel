import graphene
from .types import UserType
from vapeking.user.models import User
from ..core.utils import staff_member_required, active_member_required


class UserQueries(graphene.ObjectType):
    user = graphene.Field(
        UserType, id=graphene.Argument(graphene.ID, description="ID of User.")
    )

    @active_member_required
    def resolve_user(self, _info, id):
        return User.objects.filter(id=id).first()

    @staff_member_required
    def resolve_users(self, _info):
        return User.objects.all()

