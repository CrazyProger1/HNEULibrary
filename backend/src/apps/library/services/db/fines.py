from src.apps.library.models import Fine
from src.utils.db import get_all_objects, filter_objects


def get_user_fines(user):
    return filter_objects(
        source=Fine,
        rental__reader=user,
    )


def get_all_fines():
    return get_all_objects(source=Fine)
