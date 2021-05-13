from django.db import models
from django import forms
from ..store.models import Store

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, is_active=True, is_staff=False, is_manager=False, is_admin=False):
        if not email:
            raise ValueError('Użytkownik musi posiadać adres e-mail.')
        if not password:
            raise ValueError('Użytkownik musi posiadać hasło')
        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.isactive  = is_active
        user.isstaff   = is_staff
        user.ismanager = is_manager
        user.isadmin   = is_admin

        user.save(using=self._db)
        return user
    

    def create_staffuser(self, email, password=None):
        user = self.create_user(
            email,
            password=password,
            is_staff=True,
        )
        user.save(using=self._db)
        return user

    def create_manageruser(self, email, password):
        user = self.create_user(
            email,
            password=password,
            is_staff=True,
            is_manager=True,
        )
        user.save(using=self._db)
        return user


    def create_superuser(self, email, password):
        user = self.create_user(
            email,
            password=password,
            is_staff=True,
            is_manager=True,
            is_admin=True,
        )
        user.save(using=self._db)
        return user




class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    password = models.CharField(max_length=100, null=False, blank=False)

    name     = models.CharField(max_length=30, blank=True)
    surename = models.CharField(max_length=30, blank=True)
    
    store    = models.ForeignKey(Store, on_delete=models.CASCADE, blank=True, default=1)
    isactive  = models.BooleanField(default=True)
    isstaff   = models.BooleanField(default=False)
    ismanager = models.BooleanField(default=False)
    isadmin   = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password required by default

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        short_name = f"{self.name} {self.surename}"

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.isstaff

    @property
    def is_manager(self):
        return self.ismanager

    @property
    def is_admin(self):
        return self.isadmin

    objects = UserManager()



# OLD USER MODEL
# class User(models.Model):

#     class Powers(models.IntegerChoices):
#         UNACTIVE = 0
#         EMPLOYEE = 1
#         MANAGER  = 2
#         ADMIN    = 3
#         # __empty__ = _('(Unknown)')

#     u_name = models.CharField(max_length=30, null=False, blank=False)
#     u_surename = models.CharField(max_length=30, null=False, blank=False)
#     u_password = models.CharField(max_length=100, null=False, blank=False)
#     u_power_flag = models.IntegerField(blank=False, choices=Powers.choices)
#     u_store = models.OneToOneField(Store, on_delete=models.CASCADE, default=0)


#     def __str__(self):
#         return self.u_name



    
