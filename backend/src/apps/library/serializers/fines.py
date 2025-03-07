from rest_framework import serializers

from src.apps.library.models import Fine


class FineListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fine
        fields = (
            "id",
            "amount",
            "description",
            "reason",
            "is_compensated",
        )
