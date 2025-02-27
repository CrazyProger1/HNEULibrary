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
    )
    fieldsets = (
        (
            "Basic Information",
            {
                "fields": (
                    "name",
                    "discount",
                    "is_active",
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
