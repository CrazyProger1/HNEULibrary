from rest_framework import viewsets, generics

from src.apps.library.serializers import BookListSerializer
from src.apps.library.services.db import get_all_books


class BookViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_books()
    serializer_class = BookListSerializer
