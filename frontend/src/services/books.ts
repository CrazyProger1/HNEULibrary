import { Book, BookFilters, PaginatedResponse } from "../types";

import { URLS } from "../constants";
import { axios } from "./api.ts";
import { Rental } from "../types";

type BooksResponse = PaginatedResponse<Book>;
type BookResponse = Book;
type RentalsResponse = PaginatedResponse<Rental>;

export const getBooks = async (
  filters: BookFilters = {},
): Promise<BooksResponse> => {
  const url = URLS.BOOKS;
  const response = await axios.get(url, { params: filters });

  return {
    success: true,
    ...response.data,
  };
};

export const getBook = async (id: number): Promise<BookResponse> => {
  const url = URLS.BOOK.replace("[id]", String(id));
  const response = await axios.get(url);

  return {
    success: true,
    ...response.data,
  };
};

export const getRentals = async (): Promise<RentalsResponse> => {
  const url = URLS.RENTALS;
  const response = await axios.get(url);

  return {
    success: true,
    ...response.data,
  };
};
