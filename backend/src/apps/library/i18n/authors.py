from modeltranslation.translator import TranslationOptions, translator

from src.apps.library.models import Author


class AuthorTranslationOptions(TranslationOptions):
    fields = ("first_name", "last_name")


translator.register(Author, AuthorTranslationOptions)
