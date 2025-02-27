from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
from django.contrib.auth.models import Group
from django.utils.translation import gettext_lazy as _

from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.admin import ModelAdmin

from src.apps.accounts.models import CustomUser, Discount

admin.site.unregister(Group)


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


@admin.register(CustomUser)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    autocomplete_fields = (
        "discounts",
    )
    fieldsets = (
        ("Basic Info", {"fields": ("username", "password")}),

        (
            _("Personal Info"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "email",
                    "born_at",
                )
            },
        ),
        ("Finances", {"fields": ("discounts",)}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important Dates"), {"fields": ("last_login", "date_joined")}),
    )


@admin.register(Group)
class GroupAdmin(BaseGroupAdmin, ModelAdmin):
    pass
