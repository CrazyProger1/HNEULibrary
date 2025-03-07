import {makeAutoObservable} from "mobx";
import {Book} from "../types";
import {getBook, getBooks} from "../services";
import {RentalsApiResponse} from "../types/books.ts";
import {getRentals} from "../services/books.ts";

export class LibraryStore {
    books: Book[] = [];
    recommendedBooks: Book[] = [];
    book: Book = {
        author: {
            id: 0,
            first_name: "",
            last_name: "",
        },
        available_copies: 0,
        deposit_price: "",
        discounts: [],
        genre: {
            id: 0,
            name: "",
        },
        id: 0,
        rental_price: "",
        title: "",
        image: "",
    }
    rentals: RentalsApiResponse = {
        count: 0,
        next: null,
        previous: null,
        results: [],
    };

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

    async getBookById(id: number): Promise<Book> {
        this.book = await getBook(id);
        return this.book;
    }

    async getRentals(): Promise<RentalsApiResponse> {
        this.rentals = await getRentals();
        return this.rentals;
    }
}

export default new LibraryStore();
