from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from src.apps.library.enums import RentalStatus
from src.utils.db.models import TimestampModelMixin, CreatedByModelMixin


class Rental(CreatedByModelMixin, TimestampModelMixin, models.Model):
    reader = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="rentals",
        null=False,
        blank=False,
        verbose_name=_("reader"),
    )
    book = models.ForeignKey(
        "Book",
        on_delete=models.CASCADE,
        related_name="rentals",
        null=False,
        blank=False,
        verbose_name=_("book"),
    )
    status = models.CharField(
        max_length=50,
        choices=RentalStatus,
        null=False,
        blank=False,
        default=RentalStatus.ACTIVE,
        verbose_name=_("status"),
    )
    started_at = models.DateTimeField(
        null=False,
        blank=False,
        default=timezone.now,
        verbose_name=_("start at"),
    )
    ended_at = models.DateTimeField(
        null=False,
        blank=False,
        verbose_name=_("end at"),
    )
    is_active = models.BooleanField(
        null=False,
        blank=False,
        default=True,
        verbose_name=_("is active"),
    )

    class Meta:
        verbose_name = _("Rental")
        verbose_name_plural = _("Rental")
