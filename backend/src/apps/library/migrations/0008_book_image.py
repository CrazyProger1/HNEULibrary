# Generated by Django 5.1.6 on 2025-02-27 09:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0007_book_title_en_book_title_uk"),
    ]

    operations = [
        migrations.AddField(
            model_name="book",
            name="image",
            field=models.FileField(
                blank=True, null=True, upload_to="library/", verbose_name="image"
            ),
        ),
    ]
