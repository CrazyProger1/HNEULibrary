from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.db.models import TimestampModelMixin, CreatedByModelMixin


class Discount(CreatedByModelMixin, TimestampModelMixin, models.Model):
    name = models.CharField(
        max_length=250,
        null=False,
        blank=False,
        verbose_name=_("name"),
    )
    discount = models.PositiveIntegerField(
        null=False,
        blank=False,
        verbose_name=_("discount percent"),
    )
    is_active = models.BooleanField(
        null=False,
        blank=False,
        verbose_name=_("is active")
    )

    class Meta:
        verbose_name = _("Discount")
        verbose_name_plural = _("Discounts")

    def __str__(self):
        return f"{self.name} - {self.discount}%"
