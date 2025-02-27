from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from src.apps.library.models import Book
from src.apps.library.serializers.discounts import DiscountListSerializer
from src.apps.library.serializers.genres import GenreRetrieveCompactSerializer
from src.apps.library.serializers.authors import AuthorRetrieveCompactSerializer
from src.apps.library.services.db import count_available_copies, get_book_discounts


class BookRetrieveSerializer(serializers.ModelSerializer):
    genre = GenreRetrieveCompactSerializer()
    author = AuthorRetrieveCompactSerializer()
    available_copies = serializers.SerializerMethodField()
    discounts = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = (
            "id",
            "title",
            "image",
            "available_copies",
            "discounts",
            "rental_price",
            "deposit_price",
            "published_at",
            "created_at",
            "updated_at",
            "author",
            "genre",
        )

    def get_available_copies(self, obj: Book):
        return count_available_copies(book=obj)

    @extend_schema_field(DiscountListSerializer(many=True))
    def get_discounts(self, obj: Book):
        user = self.context["request"].user

        if user.is_anonymous:
            return []

        discounts = get_book_discounts(
            user=user,
            book=obj,
        )
        return DiscountListSerializer(discounts, many=True).data


class BookListSerializer(BookRetrieveSerializer):
    pass
