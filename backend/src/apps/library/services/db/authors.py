from src.apps.library.models import Author
from src.utils.db import get_all_objects


def get_all_authors():
    return get_all_objects(source=Author)
