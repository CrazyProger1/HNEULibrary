from django_filters import rest_framework as filters
from rest_framework import viewsets, generics

from src.apps.library.filters import BookFilter
from src.apps.library.serializers import BookListSerializer
from src.apps.library.services.db import get_all_books


class BookViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_books()
    serializer_class = BookListSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BookFilter
