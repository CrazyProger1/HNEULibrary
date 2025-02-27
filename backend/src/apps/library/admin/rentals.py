from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin

from src.apps.library.models import Rental


@admin.register(Rental)
class RentalAdmin(ModelAdmin):
    list_display = (
        "admin_image",
        "id",
        "book__title",
        "reader__first_name",
        "reader__last_name",
        "status",
    )
    list_display_links = (
        "admin_image",
        "book__title",
    )
    search_fields = (
        "id",
        "book__title",
    )
    list_filter = (
        "status",
        "ended_at",
        "started_at",
        "created_at",
    )
    list_select_related = ("book",)

    def admin_image(self, obj: Rental):
        image = obj.book.image
        if image:
            return format_html(
                '<img src="{}" width="80" height="150" />',
                settings.MEDIA_URL + image.name,
            )
        return "No Image"

    admin_image.short_description = "Image"
