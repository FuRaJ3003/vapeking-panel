from graphene_django import DjangoObjectType
from django import forms

from vapeking.user.models import User

class UserType(DjangoObjectType):

    class Meta:
        model = User
        fields = "__all__"

        widgets = {
            'u_password': forms.PasswordInput()
        }
