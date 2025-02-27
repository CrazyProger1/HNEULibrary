from modeltranslation.translator import TranslationOptions, translator

from src.apps.library.models import Discount


class DiscountTranslationOptions(TranslationOptions):
    fields = ("name",)


translator.register(Discount, DiscountTranslationOptions)
