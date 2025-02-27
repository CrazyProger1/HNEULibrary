from rest_framework import viewsets, generics, permissions

from src.apps.library.serializers import DiscountListSerializer
from src.apps.library.services.db import get_user_discounts, get_all_discounts


class DiscountViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.RetrieveAPIView,
):
    queryset = get_all_discounts()
    serializer_class = DiscountListSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return get_user_discounts(user=self.request.user)
