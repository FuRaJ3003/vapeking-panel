  
import graphene

from .types import UserType
from ...user.models import User
from ..core.utils import staff_member_required, superuser_member_required

from django.core.validators import validate_email
from django.core.exceptions import ValidationError


class UserCreateInput(graphene.InputObjectType):
    email = graphene.String(required=True)
    password = graphene.String(required=True)
    name = graphene.String(required=False)
    surename = graphene.String(required=False)

    @staticmethod
    def validate_email(email):
        try:
            validate_email(email)
            if User.objects.filter(email=email).exists():
                raise ValidationError(f"Ten email już istnieje: {email}")
            
        except ValidationError:
            raise ValidationError("Email input jest niepoprawny")
            
        return email

    @staticmethod
    def validate_password(password):
        if len(password) < 8:
            raise ValidationError("Hasło musi zawierać co najmniej 8 znaków.")
        return password



class UserCreate(graphene.Mutation):
    
    user = graphene.Field(UserType)
    
    class Arguments:
        input = UserCreateInput(required=True)

    @classmethod
    def mutate(cls, root, _info, input):
        cleaned_input = input
        cleaned_input['email'] = UserCreateInput.validate_email(cleaned_input['email'])
        cleaned_input['password'] = UserCreateInput.validate_password(cleaned_input['password'])
        user = User.objects.create_user(**cleaned_input)
        return UserCreate(user=user)


class StaffCreate(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        input = UserCreateInput(required=True)

    @classmethod
    # @superuser_member_required
    def mutate(cls, root, _info, input):
        cleaned_input = input
        cleaned_input['email'] = UserCreateInput.validate_email(cleaned_input['email'])
        cleaned_input['password'] = UserCreateInput.validate_password(cleaned_input['password'])

        staff = User.objects.create_staffuser(**cleaned_input, is_staff=True)
        return StaffCreate(user=staff)
