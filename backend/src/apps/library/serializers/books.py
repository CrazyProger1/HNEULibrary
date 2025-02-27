from rest_framework import serializers

from src.apps.library.models import Book
from src.apps.library.serializers.genres import GenreRetrieveCompactSerializer
from src.apps.library.serializers.authors import AuthorRetrieveCompactSerializer
from src.apps.library.services.db import count_available_copies


class BookListSerializer(serializers.ModelSerializer):
    genre = GenreRetrieveCompactSerializer()
    author = AuthorRetrieveCompactSerializer()
    available_copies = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = (
            "id",
            "title",
            "image",
            "available_copies",
            "published_at",
            "created_at",
            "updated_at",
            "author",
            "genre",
        )

    def get_available_copies(self, obj: Book):
        return count_available_copies(book=obj)
