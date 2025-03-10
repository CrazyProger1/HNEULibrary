import { Author } from "./authors.ts";
import { Genre } from "./genres.ts";
import { Discount } from "./discounts.ts";
import { Reader } from "./reader.ts";

export type BookOrdering =
  | "copies"
  | "-copies"
  | "rental_price"
  | "-rental_price"
  | "published_at"
  | "-published_at";
export type BookFilters = {
  query?: string;
  ordering?: BookOrdering;
};

export type Book = {
  id: number;
  author: Author;
  genre: Genre;
  title: string;
  image?: string;
  rental_price: string;
  deposit_price: string;
  available_copies: number;
  discounts: Discount[];
};

export type Rental = {
  id: number;
  started_at: string;
  ended_at: string;
  book: Book;
  reader: Reader;
  is_active: boolean;
};
