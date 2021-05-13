from django import forms
from vapeking.user.models import User

class UserForm(forms.ModelForm):

    u_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ("u_name", "u_surename", "u_password", "u_power_flag", "u_store")