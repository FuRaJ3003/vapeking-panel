from django.http import HttpResponse
from graphene_django.views import GraphQLView
import graphdoc

def graphql_docs(request):
    # For graphene>=3 use schema.graphql_schema
    # html = graphdoc.to_doc(GraphQLView().schema.graphql_schema)
    html = graphdoc.to_doc(GraphQLView().schema)
    return HttpResponse(html, content_type='text/html')