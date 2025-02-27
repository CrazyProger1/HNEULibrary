from django.contrib import admin
from unfold.admin import ModelAdmin

from src.apps.library.models import Author


@admin.register(Author)
class AuthorAdmin(ModelAdmin):
    list_display = (
        "id",
        "first_name",
        "last_name",
    )

    search_fields = (
        "id",
        "first_name",
        "last_name",
    )
    list_display_links = (
        "first_name",
        "last_name",
    )
