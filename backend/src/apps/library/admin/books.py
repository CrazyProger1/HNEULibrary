from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.library.models import Book


@admin.register(Book)
class BookAdmin(TabbedTranslationAdmin, ModelAdmin):
    list_display = (
        "admin_image",
        "id",
        "title",
        "genre__name",
        "published_at",
        "created_at",
        "updated_at",
    )
    list_display_links = (
        "admin_image",
        "title",
    )
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
    autocomplete_fields = (
        "author",
        "genre",
    )
    fieldsets = (
        (
            "Basic Information",
            {
                "fields": (
                    "title",
                    "genre",
                    "author",
                    "published_at",
                    "copies",
                ),
            },
        ),
        (
            "Media",
            {
                "fields": ("image",),
            },
        ),
        (
            "Finances",
            {
                "fields": ("rental_price", "deposit_price",),
            },
        ),
        (
            "Metadata",
            {
                "fields": (
                    "created_at",
                    "created_by",
                ),
                "classes": ("collapse",),
            },
        ),
    )

    def admin_image(self, obj: Book):
        if obj.image:
            return format_html(
                '<img src="{}" width="80" height="150" />',
                settings.MEDIA_URL + obj.image.name,
            )
        return "No Image"

    admin_image.short_description = "Image"
