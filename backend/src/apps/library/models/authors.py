from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.db.models import TimestampModelMixin, CreatedByModelMixin


class Author(CreatedByModelMixin, TimestampModelMixin, models.Model):
    first_name = models.CharField(
        max_length=250,
        verbose_name=_("first name"),
        blank=False,
        null=False,
    )
    last_name = models.CharField(
        max_length=250,
        verbose_name=_("last name"),
        blank=False,
        null=False,
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        verbose_name=_("internal user"),
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = _("Author")
        verbose_name_plural = _("Author")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
