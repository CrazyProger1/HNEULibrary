from rest_framework import viewsets, generics

from src.apps.library.serializers import AuthorListSerializer
from src.apps.library.services.db import get_all_authors


class AuthorViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_authors()
    serializer_class = AuthorListSerializer
