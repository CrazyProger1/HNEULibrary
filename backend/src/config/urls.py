from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("src.apps.library.urls")),
    path("", include("src.apps.accounts.urls")),
    path("", include("src.apps.docs.urls")),
]
