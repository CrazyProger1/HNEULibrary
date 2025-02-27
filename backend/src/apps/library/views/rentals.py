from rest_framework import viewsets, generics, permissions

from src.apps.library.serializers import RentalListSerializer
from src.apps.library.services.db import get_all_rentals, get_user_rentals


class RentalViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = get_all_rentals()
    serializer_class = RentalListSerializer

    def get_queryset(self):
        return get_user_rentals(user=self.request.user)
