from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from src.apps.accounts.views import UserViewSet

router = routers.DefaultRouter()
router.register("api/v1/users", UserViewSet)

urlpatterns = (
    path("api/v1/tokens/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/v1/tokens/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/tokens/verify/", TokenVerifyView.as_view(), name="token_verify"),
    *router.urls,
)
