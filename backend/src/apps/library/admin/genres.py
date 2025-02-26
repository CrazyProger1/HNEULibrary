from django.contrib import admin
from unfold.admin import ModelAdmin

from src.apps.library.models import Genre


@admin.register(Genre)
class GenreAdmin(ModelAdmin):
    list_display = (
        "id",
        "name",
        "created_at",
    )
    list_display_links = (
        "name",
    )
    search_fields = (
        "id",
        "name",
    )
    list_filter = (
        "created_at",
    )
