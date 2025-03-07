from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

phone_regex = RegexValidator(
    regex=r"^\+?1?\d{9,15}$",
    message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
)


class CustomUser(AbstractUser):
    born_at = models.DateField(
        null=True,
        blank=True,
        verbose_name=_("birth date"),
    )
    discounts = models.ManyToManyField(
        to="library.Discount",
        null=True,
        blank=True,
        verbose_name=_("discounts")
    )
    phone = models.CharField(
        max_length=15,
        null=True,
        blank=True,
        verbose_name=_("phone"),
    )
    address = models.CharField(
        max_length=150,
        null=True,
        blank=True,
        verbose_name=_("address")
    )
