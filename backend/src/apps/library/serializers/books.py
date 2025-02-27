from rest_framework import serializers

from src.apps.library.models import Book
from src.apps.library.serializers.genres import GenreRetrieveCompactSerializer
from src.apps.library.serializers.authors import AuthorRetrieveCompactSerializer


class BookListSerializer(serializers.ModelSerializer):
    genre = GenreRetrieveCompactSerializer()
    author = AuthorRetrieveCompactSerializer()

    class Meta:
        model = Book
        fields = (
            "id",
            "title",
            "image",
            "published_at",
            "created_at",
            "updated_at",
            "author",
            "genre",
        )
