export const API_URL =
  import.meta.env.API_URL || "https://justalibrary.crazyproger1.com/api/v1/";

export const URLS = {
  USERS: "users/",
  USER: "users/[id]/",
  USER_ME: "users/me/",
  TOKENS: "tokens/",
  TOKEN_REFRESH: "tokens/refresh/",
  TOKEN_VERIFY: "tokens/verify/",
  BOOKS: "books/",
  BOOK: "books/[id]/",
  AUTHORS: "authors/",
  AUTHOR: "authors/[id]/",
  GENRES: "genres/",
  GENRE: "genres/[id]/",
  RENTALS: "rentals/",
  RENTAL: "rentals/[id]/",
  DISCOUNTS: "discounts/",
  DISCOUNT: "discounts/[id]/",
  FINES: "fines/",
  FINE: "fines/[id]/",
};
