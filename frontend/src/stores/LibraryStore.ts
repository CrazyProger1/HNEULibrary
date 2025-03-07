import { makeAutoObservable } from "mobx";
import { Book, BookFilters } from "../types";
import { getBook, getBooks, getRentals } from "../services";
import { Rental } from "../types";

export class LibraryStore {
  books: Book[] = [];
  recommendedBooks: Book[] = [];
  book: Book | undefined;
  rentals: Rental[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getBooks(filters: BookFilters = {}): Promise<Book[]> {
    const response = await getBooks(filters);
    this.books = response.results;
    return this.books;
  }

  async getRecommendedBooks(): Promise<Book[]> {
    const response = await getBooks({
      ordering: "rental_price",
    });
    this.recommendedBooks = response.results;
    return this.books;
  }

  async getBookById(id: number): Promise<Book> {
    this.book = await getBook(id);
    return this.book;
  }

  async getRentals(): Promise<Rental[]> {
    const response = await getRentals();
    this.rentals = response.results;
    return this.rentals;
  }
}

export default new LibraryStore();
