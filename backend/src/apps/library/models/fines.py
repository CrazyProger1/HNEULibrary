from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.db.models import TimestampModelMixin, CreatedByModelMixin


class Fine(CreatedByModelMixin, TimestampModelMixin, models.Model):
    rental = models.ForeignKey(
        to="Rental",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        verbose_name=_("rental"),
    )
    amount = models.DecimalField(
        null=False,
        blank=False,
        max_digits=10,
        decimal_places=2,
        verbose_name=_("amount"),
        help_text=_("The amount of money reader should pay."),
    )
    reason = models.TextField(
        verbose_name=_("reason"),
        null=True,
        blank=True,
    )
    is_compensated = models.BooleanField(
        default=False,
        blank=False,
        null=False,
        verbose_name=_("is compensated"),
    )

    class Meta:
        verbose_name = _("Fine")
        verbose_name_plural = _("Fines")
