from rest_framework import viewsets, generics, permissions

from src.apps.library.serializers import FineListSerializer
from src.apps.library.services.db import get_all_fines, get_user_fines


class FineViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_fines()
    serializer_class = FineListSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return get_user_fines(user=self.request.user)
