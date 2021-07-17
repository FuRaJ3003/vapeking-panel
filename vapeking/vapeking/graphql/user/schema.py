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

    user_email = graphene.Field(
        UserType, email=graphene.Argument(graphene.String, description="Email of User.")
    )

    me = graphene.Field(UserType)

    # @active_member_required
    def resolve_user(self, _info, id):
        return User.objects.filter(id=id).first()

    # @active_member_required
    def resolve_user_email(self, _info, email):
        return User.objects.filter(email=email).first()

    # @active_member_required
    def resolve_users(self, _info):
        return User.objects.all()

    def resolve_me(self, _info):
        pass


class UserMutations(graphene.ObjectType):
    user_create = UserCreate.Field()
    staff_create = StaffCreate.Field()
