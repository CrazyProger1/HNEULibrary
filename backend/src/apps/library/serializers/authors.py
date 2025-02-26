from rest_framework import serializers

from src.apps.library.models import Author


class AuthorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"


class AuthorRetrieveCompactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        exclude = (
            "created_at",
            "updated_at",
            "created_by",
        )
