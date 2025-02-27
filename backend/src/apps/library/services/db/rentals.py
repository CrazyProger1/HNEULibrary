from django.db import models

from src.apps.library.models import Rental
from src.utils.db import get_all_objects, filter_objects


def get_all_rentals() -> models.QuerySet[Rental]:
    return get_all_objects(source=Rental)


def get_user_rentals(user) -> models.QuerySet[Rental]:
    return filter_objects(source=Rental, reader=user)
