from rest_framework import serializers

from src.apps.library.models import Rental
from src.apps.library.serializers.books import BookRetrieveSerializer
from src.apps.accounts.serializers import UserRetrieveSerializer


class RentalListSerializer(serializers.ModelSerializer):
    book = BookRetrieveSerializer(read_only=True)
    reader = UserRetrieveSerializer(read_only=True)

    class Meta:
        model = Rental
        fields = (
            "id",
            "started_at",
            "ended_at",
            "book",
            "reader",
            "is_active",
        )
