import { Book, PaginatedResponse } from "../types";

import { URLS } from "../constants";
import { axios } from "./api.ts";

type BooksResponse = PaginatedResponse<Book>;
type BookResponse = Book;
export const getBooks = async (): Promise<BooksResponse> => {
  const url = URLS.BOOKS;
  const response = await axios.get(url);

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
