from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.library.models import Genre


@admin.register(Genre)
class GenreAdmin(TabbedTranslationAdmin, ModelAdmin):
    list_display = (
        "admin_image",
        "id",
        "name",
        "created_at",
    )
    list_display_links = (
        "name",
        "admin_image",
    )
    search_fields = (
        "id",
        "name",
    )
    list_filter = ("created_at",)

    def admin_image(self, obj: Genre):
        if obj.image:
            return format_html(
                '<img src="{}" width="150" height="120" />',
                settings.MEDIA_URL + obj.image.name,
            )
        return "No Image"

    admin_image.short_description = "Image"
