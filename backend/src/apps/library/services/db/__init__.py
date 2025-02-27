from src.apps.library.services.db.books import (
    get_all_books,
    search_books,
    count_available_copies,
)
from src.apps.library.services.db.genres import get_all_genres
from src.apps.library.services.db.authors import get_all_authors
from src.apps.library.services.db.rentals import get_all_rentals, get_user_rentals
from src.apps.library.services.db.discounts import get_book_discounts
