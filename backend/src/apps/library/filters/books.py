import django_filters as filters

from src.apps.library.models import Book
from src.apps.library.services.db import search_books


class BookFilter(filters.FilterSet):
    query = filters.CharFilter(method="search", label="Search")

    ordering = filters.OrderingFilter(
        fields=(
            ("id", "id"),
            ("created_at", "created_at"),
            ("updated_at", "updated_at"),
            ("built_at", "built_at"),
            ("abandoned_at", "abandoned_at"),
        ),
    )

    class Meta:
        model = Book
        fields = (
            "query",
        )

    def search(self, queryset, name, value):
        if value in ([], (), {}, "", None):
            return queryset

        return search_books(
            source=queryset,
            term=value,
            fields=(
                "title",
            ),
        )
