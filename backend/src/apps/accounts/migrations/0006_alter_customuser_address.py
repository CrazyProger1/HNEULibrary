# Generated by Django 5.1.6 on 2025-03-07 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0005_customuser_address"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="address",
            field=models.CharField(
                blank=True, max_length=150, null=True, verbose_name="address"
            ),
        ),
    ]
