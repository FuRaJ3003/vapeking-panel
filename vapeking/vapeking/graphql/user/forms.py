from django import forms
from vapeking.user.models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        widgets = {
            'u_password': forms.PasswordInput(),
        }