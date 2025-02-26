from django.contrib import admin
from unfold.admin import ModelAdmin

from src.apps.library.models import Book


@admin.register(Book)
class BookAdmin(ModelAdmin):
    list_display = (
        "id",
        "title",
        "genre__name" "published_at",
        "created_at",
        "updated_at",
    )
    list_display_links = ("title",)
    search_fields = (
        "id",
        "title",
        "genre__name",
    )
    list_filter = (
        "published_at",
        "created_at",
        "updated_at",
    )
