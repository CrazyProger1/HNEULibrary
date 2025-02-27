from django.contrib import admin
from unfold.admin import ModelAdmin

from src.apps.library.models import Discount


@admin.register(Discount)
class DiscountAdmin(ModelAdmin):
    list_display = (
        "id",
        "name",
        "discount",
        "is_active",
        "is_overall",
        "is_common",
    )

    search_fields = (
        "id",
        "name",
    )
    list_display_links = (
        "name",
    )
    list_filter = (
        "is_active",
        "is_overall",
    )
    autocomplete_fields = (
        "books",
        "genres",
    )
    fieldsets = (
        (
            "Basic Information",
            {
                "fields": (
                    "name",
                    "discount",
                    "is_active",
                    "is_overall",
                    "is_common",
                    "genres",
                    "books",
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
