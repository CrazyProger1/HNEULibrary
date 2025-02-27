from rest_framework import serializers

from src.apps.library.models import Genre


class GenreListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = (
            "id",
            "name",
            "image",
        )


class GenreRetrieveCompactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        exclude = (
            "created_at",
            "updated_at",
            "created_by",
        )
