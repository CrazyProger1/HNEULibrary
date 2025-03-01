from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


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
