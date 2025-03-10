# Generated by Django 5.1.6 on 2025-03-07 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("library", "0025_alter_fine_amount"),
    ]

    operations = [
        migrations.AlterField(
            model_name="author",
            name="first_name",
            field=models.CharField(max_length=150, verbose_name="first name"),
        ),
        migrations.AlterField(
            model_name="author",
            name="first_name_en",
            field=models.CharField(
                max_length=150, null=True, verbose_name="first name"
            ),
        ),
        migrations.AlterField(
            model_name="author",
            name="first_name_uk",
            field=models.CharField(
                max_length=150, null=True, verbose_name="first name"
            ),
        ),
        migrations.AlterField(
            model_name="author",
            name="last_name",
            field=models.CharField(max_length=150, verbose_name="last name"),
        ),
        migrations.AlterField(
            model_name="author",
            name="last_name_en",
            field=models.CharField(max_length=150, null=True, verbose_name="last name"),
        ),
        migrations.AlterField(
            model_name="author",
            name="last_name_uk",
            field=models.CharField(max_length=150, null=True, verbose_name="last name"),
        ),
        migrations.AlterField(
            model_name="book",
            name="title",
            field=models.CharField(max_length=150, verbose_name="title"),
        ),
        migrations.AlterField(
            model_name="book",
            name="title_en",
            field=models.CharField(max_length=150, null=True, verbose_name="title"),
        ),
        migrations.AlterField(
            model_name="book",
            name="title_uk",
            field=models.CharField(max_length=150, null=True, verbose_name="title"),
        ),
        migrations.AlterField(
            model_name="discount",
            name="name",
            field=models.CharField(max_length=150, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="discount",
            name="name_en",
            field=models.CharField(max_length=150, null=True, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="discount",
            name="name_uk",
            field=models.CharField(max_length=150, null=True, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="genre",
            name="name",
            field=models.CharField(max_length=150, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="genre",
            name="name_en",
            field=models.CharField(max_length=150, null=True, verbose_name="name"),
        ),
        migrations.AlterField(
            model_name="genre",
            name="name_uk",
            field=models.CharField(max_length=150, null=True, verbose_name="name"),
        ),
    ]
