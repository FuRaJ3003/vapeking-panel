from graphene_django import DjangoObjectType

from vapeking.user.models import User

class UserType(DjangoObjectType):

    class Meta:
        model = User
        fields = "__all__"
