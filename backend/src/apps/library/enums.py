from django.db import models
from django.utils.translation import gettext_lazy as _


class RentalStatus(models.TextChoices):
    ACTIVE = "ACTIVE", _("Active")
    RETURNED = "RETURNED", _("Returned")
    OVERDUE = "OVERDUE", _("Overdue")
    LOST = "LOST", _("Lost")
    DAMAGED = "DAMAGED", _("Damaged")
