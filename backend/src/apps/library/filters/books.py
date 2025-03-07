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
            ("published_at", "published_at"),
            ("copies", "copies"),
            ("rental_price", "rental_price")
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
            localized_fields=(
                "author__first_name",
                "author__last_name",
                "genre__name",
            ),
        ).annotate(
            priority=Value(2),
        )
        return primary_results.union(secondary_results).order_by("priority")
