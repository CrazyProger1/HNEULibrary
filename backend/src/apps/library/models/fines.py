from django.db import models
from django.utils.translation import gettext_lazy as _

from src.apps.library.enums import FineReason
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
    reason = models.CharField(
        max_length=20,
        choices=FineReason,
        default=FineReason.DAMAGED,
        null=True,
        blank=True,
        verbose_name=_("reason"),
    )
    description = models.TextField(
        null=True,
        blank=True,
        verbose_name=_("description"),
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

    def __str__(self):
        return f"{self.rental.book} - {self.amount}"
