from src.apps.library.models import Genre
from src.utils.db import get_all_objects


def get_all_genres():
    return get_all_objects(source=Genre)
