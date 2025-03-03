import { makeAutoObservable } from "mobx";
import { Book } from "../types";

export class LibraryStore {
  books: Book[] = [];

  constructor() {
    makeAutoObservable(this);
  }


}

export default new LibraryStore();
