from rest_framework import routers

from src.apps.library.views import (
    BookViewSet,
    GenreViewSet,
    AuthorViewSet,
    RentalViewSet,
    DiscountViewSet,
    FineViewSet,
)

router = routers.DefaultRouter()

router.register("api/v1/books", BookViewSet)
router.register("api/v1/genres", GenreViewSet)
router.register("api/v1/authors", AuthorViewSet)
router.register("api/v1/rentals", RentalViewSet)
router.register("api/v1/discounts", DiscountViewSet)
router.register("api/v1/fines", FineViewSet)

urlpatterns = router.urls
