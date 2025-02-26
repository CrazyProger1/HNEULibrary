# Generated by Django 5.1.6 on 2025-02-26 22:00

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0004_author"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name="author",
            name="first_name",
            field=models.CharField(
                default=django.utils.timezone.now,
                max_length=250,
                verbose_name="first name",
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="author",
            name="last_name",
            field=models.CharField(
                default="", max_length=250, verbose_name="last name"
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="author",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
                verbose_name="internal user",
            ),
        ),
        migrations.AddField(
            model_name="book",
            name="published_at",
            field=models.DateTimeField(
                blank=True,
                help_text="Book publication date and time.",
                null=True,
                verbose_name="published at",
            ),
        ),
    ]
