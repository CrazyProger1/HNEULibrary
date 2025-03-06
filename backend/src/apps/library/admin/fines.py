from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin

from src.apps.library.models import Fine


@admin.register(Fine)
class FineAdmin(ModelAdmin):
    list_display = (
        "admin_image",
        "id",
        "rental",
        "amount",
        "is_compensated",
        "created_at",
    )

    search_fields = (
        "id",
        "rental",
    )
    list_display_links = (
        "admin_image",
        "rental",
    )
    list_filter = (
        "is_compensated",
    )
    autocomplete_fields = (
        "rental",
    )
    list_select_related = (
        "rental__book",
    )
    fieldsets = (
        (
            "Basic Information",
            {
                "fields": (
                    "rental",
                    "amount",
                    "reason",
                    "desciption",
                ),
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

    def admin_image(self, obj: Fine):
        image = obj.rental.book.image
        if image:
            return format_html(
                '<img src="{}" width="80" height="150" />',
                settings.MEDIA_URL + image.name,
            )
        return "No Image"

    admin_image.short_description = "Image"
