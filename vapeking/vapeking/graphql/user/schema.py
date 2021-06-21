import graphene

from .types import UserType
from .mutations import UserCreate, StaffCreate
from vapeking.user.models import User
from ..core.utils import staff_member_required, active_member_required


class UserQueries(graphene.ObjectType):
    user = graphene.Field(
        UserType, id=graphene.Argument(graphene.ID, description="ID of User.")
    )
    users = graphene.List(UserType)

    @active_member_required
    def resolve_user(self, _info, id):
        return User.objects.filter(id=id).first()

    # @active_member_required
    def resolve_users(self, _info):
        return User.objects.all()

class UserMutations(graphene.ObjectType):
    user_create = UserCreate.Field()
    staff_create = StaffCreate.Field()
