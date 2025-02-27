import os.path
from datetime import timedelta
from pathlib import Path

from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from decouple import config, Csv
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

SECRET_KEY = config("SECRET_KEY")

DEBUG = config(
    "DEBUG",
    default=True,
    cast=bool,
)

ALLOWED_HOSTS = config(
    "ALLOWED_HOSTS",
    default="45.137.155.123",
    cast=Csv(),
)

INSTALLED_APPS = [
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.inlines",
    "unfold.contrib.import_export",
    "unfold.contrib.guardian",
    "unfold.contrib.simple_history",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "django_filters",
    "drf_spectacular",
    "rest_framework_simplejwt",
    "drf_standardized_errors",
    "modeltranslation",
    "src.apps.library",
    "src.apps.docs",
    "src.apps.accounts",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "src.apps.accounts.middlewares.I18NMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",

]

ROOT_URLCONF = "src.config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "src.config.wsgi.application"
ASGI_APPLICATION = "src.config.asgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = config("LANGUAGE_CODE", default="uk")

LANGUAGES = [
    ("en", _("English")),
    ("uk", _("Ukrainian")),
]

TIME_ZONE = config("TIME_ZONE", default="UTC")

LOCALE_PATHS = (
    BASE_DIR / "locale",
)

USE_I18N = True
USE_TZ = True
USE_L10N = True

STATIC_URL = config("STATIC_URL", default="static/")
STATIC_ROOT = config("STATIC_ROOT", default="static/")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

UNFOLD = {
    "SITE_TITLE": "Just a library",
    "SITE_HEADER": "Just a library",
    "SITE_URL": "/",
    "SITE_SYMBOL": "book",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "SHOW_BACK_BUTTON": False,
    "SHOW_LANGUAGES": True,
    "THEME": "dark",
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": True,
        "navigation": [
            {
                "title": _("Accounts"),
                "collapsible": True,
                "items": [
                    {
                        "title": _("Users"),
                        "icon": "person",
                        "link": reverse_lazy("admin:accounts_customuser_changelist"),
                    },
                    {
                        "title": _("Groups"),
                        "icon": "group",
                        "link": reverse_lazy("admin:auth_group_changelist"),
                    },
                ],
            },
            {
                "title": _("Library"),
                "collapsible": True,
                "items": [
                    {
                        "title": _("Genres"),
                        "icon": "topic",
                        "link": reverse_lazy("admin:library_genre_changelist"),
                    },
                    {
                        "title": _("Books"),
                        "icon": "library_books",
                        "link": reverse_lazy("admin:library_book_changelist"),
                    },
                    {
                        "title": _("Authors"),
                        "icon": "signature",
                        "link": reverse_lazy("admin:library_author_changelist"),
                    },
                    {
                        "title": _("Rentals"),
                        "icon": "schedule",
                        "link": reverse_lazy("admin:library_rental_changelist"),
                    },
                    {
                        "title": _("Discounts"),
                        "icon": "percent",
                        "link": reverse_lazy("admin:library_discount_changelist"),
                    },
                    {
                        "title": _("Fines"),
                        "icon": "paid",
                        "link": reverse_lazy("admin:library_fine_changelist"),
                    },
                ],
            },
        ],
    },
}

REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "EXCEPTION_HANDLER": "drf_standardized_errors.handler.exception_handler",
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 100,
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
}

SPECTACULAR_SETTINGS = {
    "TITLE": "Just a library",
    "DESCRIPTION": "Just a simple library API server",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
}

MEDIA_URL = "media/"
MEDIA_ROOT = "media/"
UPLOADS_DIR = "uploads/"

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(days=1) if DEBUG else timedelta(days=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=3) if DEBUG else timedelta(days=30),
    "ROTATE_REFRESH_TOKENS": False,
    "BLACKLIST_AFTER_ROTATION": False,
    "UPDATE_LAST_LOGIN": False,
    "ALGORITHM": "HS256",
    "SIGNING_KEY": SECRET_KEY,
    "VERIFYING_KEY": "",
    "AUDIENCE": None,
    "ISSUER": None,
    "JSON_ENCODER": None,
    "JWK_URL": None,
    "LEEWAY": 0,
    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
    "USER_ID_FIELD": "id",
    "USER_ID_CLAIM": "user_id",
    "USER_AUTHENTICATION_RULE": "rest_framework_simplejwt.authentication.default_user_authentication_rule",
    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
    "TOKEN_TYPE_CLAIM": "token_type",
    "TOKEN_USER_CLASS": "rest_framework_simplejwt.models.TokenUser",
    "JTI_CLAIM": "jti",
    "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",
    "SLIDING_TOKEN_LIFETIME": timedelta(minutes=5),
    "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),
    "TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainPairSerializer",
    "TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSerializer",
    "TOKEN_VERIFY_SERIALIZER": "rest_framework_simplejwt.serializers.TokenVerifySerializer",
    "TOKEN_BLACKLIST_SERIALIZER": "rest_framework_simplejwt.serializers.TokenBlacklistSerializer",
    "SLIDING_TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainSlidingSerializer",
    "SLIDING_TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSlidingSerializer",
}
AUTH_USER_MODEL = "accounts.CustomUser"
