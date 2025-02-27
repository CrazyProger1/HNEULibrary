from rest_framework import serializers

from src.apps.library.models import Discount


class DiscountListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = (
            "id",
            "name",
            "discount",
        )
