from src.apps.library.models import Book
from src.utils.db import get_all_objects


def get_all_books():
    return get_all_objects(source=Book)
