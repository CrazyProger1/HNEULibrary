import django_filters as filters
from django.db.models import Value

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
            "genre",
            "author",
        )

    def search(self, queryset, name, value):
        if value in ([], (), {}, "", None):
            return queryset

        primary_results = search_books(
            source=queryset,
            term=value,
            localized_fields=("title",),
        ).annotate(
            priority=Value(1),
        )
        secondary_results = search_books(
            source=queryset,
            term=value,
            fields=(
                "author__first_name",
                "author__last_name",
                "genre__name",
            ),
        ).annotate(
            priority=Value(2),
        )
        return primary_results.union(secondary_results).order_by("priority")
