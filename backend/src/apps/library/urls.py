from rest_framework import routers

from src.apps.library.views import (
    BookViewSet,
    GenreViewSet,
    AuthorViewSet,
)

router = routers.DefaultRouter()

router.register("api/v1/books", BookViewSet)
router.register("api/v1/genres", GenreViewSet)
router.register("api/v1/authors", AuthorViewSet)

urlpatterns = router.urls
