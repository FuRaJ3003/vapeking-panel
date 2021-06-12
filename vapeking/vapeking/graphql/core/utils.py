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


def superuser_member_required(func):
    def check_su(*args, **kwargs):
        check_permission('is_superuser', *args)
        return func(*args, **kwargs)
    return check_su


def admin_member_required(func):
    def check_admin(*args, **kwargs):
        check_permission('is_admin', *args)
        return func(*args, **kwargs)
    return check_admin


def manager_member_required(func):
    def check_manager(*args, **kwargs):
        check_permission('is_manager', *args)
        return func(*args, **kwargs)
    return check_manager


def staff_member_required(func):
    def check_staff(*args, **kwargs):
        check_permission('is_staff', *args)
        return func(*args, **kwargs)
    return check_staff


def active_member_required(func):
    def check_active(*args, **kwargs):
        check_permission('is_active', *args)
        return func(*args, **kwargs)
    return check_active