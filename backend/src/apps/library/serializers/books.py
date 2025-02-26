from rest_framework import serializers

from src.apps.library.models import Book


class BookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"
