from typing import Iterable

from django.db import models

from src.apps.library.models import Book
from src.utils.db import get_all_objects, search_localized, Source


def get_all_books():
    return get_all_objects(source=Book)


def search_books(
        source: Source[Book],
        term: str,
        localized_fields: Iterable[str] = (),
        fields: Iterable[str] = (),
) -> models.QuerySet[Book]:
    return search_localized(
        source=source,
        term=term,
        localized_fields=localized_fields,
        fields=fields,
    )
