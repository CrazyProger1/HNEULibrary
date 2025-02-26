from rest_framework import viewsets, generics

from src.apps.library.serializers import GenreListSerializer
from src.apps.library.services.db import get_all_genres


class GenreViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_genres()
    serializer_class = GenreListSerializer
