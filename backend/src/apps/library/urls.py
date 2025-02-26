from rest_framework import routers

from src.apps.library.views import BookViewSet

router = routers.DefaultRouter()

router.register("api/v1/books", BookViewSet)

urlpatterns = router.urls
