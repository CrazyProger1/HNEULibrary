from django.contrib import admin
from django.utils.translation import gettext_lazy as _, get_language
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.library.models import Author


@admin.register(Author)
class AuthorAdmin(TabbedTranslationAdmin, ModelAdmin):
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
    fieldsets = (
        (
            _("Basic Information"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "user",
                ),
            },
        ),
        (
            _("Metadata"),
            {
                "fields": (
                    "created_at",
                    "created_by",
                ),
                "classes": ("collapse",),
            },
        ),
    )

    def get_queryset(self, request):
        print(request.LANGUAGE_CODE)
        print(_("Authors"))
        print(get_language())
        return super().get_queryset(request)
