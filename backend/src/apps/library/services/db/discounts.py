from django.contrib.auth import get_user_model
from django.db import models

from src.apps.library.models import Book, Discount
from src.utils.db import filter_objects

User = get_user_model()


def get_book_discounts(user: User, book: Book) -> models.QuerySet[Discount]:
    discounts = user.discounts
    queryset = filter_objects(
        source=discounts,
        is_overall=True,
    )
    queryset |= filter_objects(
        source=discounts,
        books=book,
    )
    queryset |= filter_objects(
        source=discounts,
        genres=book.genre,
    )
    return queryset.distinct()
