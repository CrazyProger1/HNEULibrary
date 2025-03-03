import { Author } from "./authors.ts";
import { Genre } from "./genres.ts";
import { Discount } from "./discounts.ts";

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
