from modeltranslation.translator import TranslationOptions, translator

from src.apps.library.models import Book


class BookTranslationOptions(TranslationOptions):
    fields = ("title",)


translator.register(Book, BookTranslationOptions)
