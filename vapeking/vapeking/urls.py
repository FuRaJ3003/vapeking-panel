from jet.dashboard.dashboard_modules import google_analytics_views
from django.contrib import admin
from django.urls import path, include
from graphene_django.views import GraphQLView
from .views import graphql_docs


urlpatterns = [
    path('jet/', include('jet.urls', 'jet')),
    path('jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),
    path('admin/', admin.site.urls),
    path('graphql/', GraphQLView.as_view(graphiql=True)),
    path('docs/', graphql_docs, name='graphql_docs'),
]
