import { makeAutoObservable } from "mobx";
import { Book } from "../types";
import { getBooks } from "../services";

export class LibraryStore {
  books: Book[] = [];
  recommendedBooks: Book[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getBooks(): Promise<Book[]> {
    const response = await getBooks();
    this.books = response.results;
    return this.books;
  }

  async getRecommendedBooks(): Promise<Book[]> {
    const response = await getBooks();
    this.recommendedBooks = response.results;
    return this.books;
  }
}

export default new LibraryStore();
