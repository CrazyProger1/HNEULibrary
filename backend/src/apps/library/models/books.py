from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.db.models import TimestampModelMixin, CreatedByModelMixin


class Book(CreatedByModelMixin, TimestampModelMixin, models.Model):
    genre = models.ForeignKey(
        to="Genre",
        on_delete=models.CASCADE,
        related_name="genres",
        verbose_name=_("genre"),
    )
    title = models.CharField(
        max_length=250,
        verbose_name=_("title"),
        null=False,
        blank=False,
    )
    published_at = models.DateTimeField(
        verbose_name=_("published at"),
        help_text=_("Book publication date and time."),
        blank=True,
        null=True,
    )
    author = models.ForeignKey(
        to="Author",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        verbose_name=_("author"),
    )
    image = models.FileField(
        verbose_name=_("image"),
        upload_to=settings.UPLOADS_DIR,
        null=True,
        blank=True,
    )
    copies = models.PositiveIntegerField(
        default=0,
        blank=False,
        null=False,
        verbose_name=_("copies"),
    )
    deposit_price = models.DecimalField(
        null=False,
        blank=False,
        max_digits=10,
        decimal_places=2,
        validators=(MinValueValidator(0),),
        verbose_name=_("deposit price"),
        help_text=_("The amount the client pays as a deposit."),
    )
    rental_price = models.DecimalField(
        null=False,
        blank=False,
        max_digits=10,
        decimal_places=2,
        validators=(MinValueValidator(0),),
        verbose_name=_("rental price"),
        help_text=_("The cost per day for renting the book."),
    )

    class Meta:
        verbose_name = _("Book")
        verbose_name_plural = _("Books")

    def __str__(self):
        return self.title
