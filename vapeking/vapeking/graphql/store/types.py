from graphene_django import DjangoObjectType
from django import forms
from vapeking.store.models import Store


class StoreType(DjangoObjectType):
    class Meta:
        model = Store
        fields = "__all__"
