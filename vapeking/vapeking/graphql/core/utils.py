import graphene
import graphql_jwt
from graphql.type.definition import GraphQLResolveInfo

class AuthenticateMutations(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


class UserPermissionError(PermissionError):
    def __init__(self, msg='Nie masz uprawnień aby wykonać tę akcję', *args, **kwargs):
        super().__init__(msg, *args, **kwargs)


def check_permission(name, *args):
    for arg in args:
        if isinstance(arg, GraphQLResolveInfo):
            if not getattr(arg.context.user, name):
                raise UserPermissionError

def superuser_required(func):
    def check_su(*args, **kwargs):
        check_permission('is_superuser', *args)
        return func(*args, **kwargs)
    return check_su


def staff_member_required(func):
    def check_staff(*args, **kwargs):
        check_permission('is_staff', *args)
        return func(*args, **kwargs)
    return check_staff 
