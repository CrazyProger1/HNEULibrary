from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.db.models import TimestampModelMixin, CreatedByModelMixin


class Genre(CreatedByModelMixin, TimestampModelMixin, models.Model):
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        blank=False,
        null=False,
    )
    image = models.FileField(
        verbose_name=_("image"),
        upload_to=settings.UPLOADS_DIR,
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = _("Genre")
        verbose_name_plural = _("Genres")

    def __str__(self):
        return f"{_('Genre')}: {self.name}"
