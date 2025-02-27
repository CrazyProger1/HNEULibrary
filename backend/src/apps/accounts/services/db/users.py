from django.contrib.auth import get_user_model

from src.utils.db import get_all_objects

User = get_user_model()


def get_all_users():
    return get_all_objects(source=User)


def create_user(**data):
    return User.objects.create_user(
        **data,
    )
