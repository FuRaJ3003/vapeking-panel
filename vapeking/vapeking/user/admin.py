from django.contrib import admin
from .models import User
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from ..graphql.user.forms import UserAdminCreationForm, UserAdminChangeForm

User = get_user_model()

# Remove group model from admin
admin.site.unregister(Group)

admin.site.site_header = "VapeKing ADMIN"
admin.site.site_title = "VapeKing Admin Portal"
admin.site.index_title = "Witaj w panelu zarządzania VapeKing!"



class UserAdmin(BaseUserAdmin):
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ['email', 'name', 'surename', 'isactive', 'isstaff', 'ismanager', 'isadmin']
    list_filter = ['isactive', 'isstaff', 'ismanager', 'isadmin']

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name', 'surename', 'store')}),
        ('Permissions', {'fields': ('isactive', 'isstaff', 'ismanager', 'isadmin',)}),
        # ('Permissions', {'fields': ('admin',)}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
            'email',
            'password',
            'password_2',
            'name',
            'surename',
            'store',
            'isactive',
            'isstaff',
            'ismanager',
            )}
        ),
    )

    search_fields = ['email']
    ordering = ['email']
    filter_horizontal = ()


admin.site.register(User, UserAdmin)