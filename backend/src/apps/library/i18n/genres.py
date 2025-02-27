from modeltranslation.translator import TranslationOptions, translator

from src.apps.library.models import Genre


class GenreTranslationOptions(TranslationOptions):
    fields = ("name",)


translator.register(Genre, GenreTranslationOptions)
