from rest_framework import routers

from src.apps.library.views import (
    BookViewSet,
    GenreViewSet,
    AuthorViewSet, RentalViewSet,
)

router = routers.DefaultRouter()

router.register("api/v1/books", BookViewSet)
router.register("api/v1/genres", GenreViewSet)
router.register("api/v1/authors", AuthorViewSet)
router.register("api/v1/rentals", RentalViewSet)

urlpatterns = router.urls
