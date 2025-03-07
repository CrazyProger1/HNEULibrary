import { observer } from "mobx-react";
import { libraryStore } from "../stores";
import React, { FormEvent, useEffect, useState } from "react";
import { PageTitle } from "../components/typography";
import { Trans, useTranslation } from "react-i18next";
import { BooksTable } from "../components/tables";
import { Container } from "../components/wrappers";
import { BookFilters } from "../types";
import { calculatePricePerDay } from "../utils/books.ts";

const AvailableBooksPage = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<BookFilters>({});

  const [query, setQuery] = useState("");

  useEffect(() => {
    libraryStore.getBooks(filters);
  }, [filters]);

  const [sortField, setSortField] = useState<"title" | "genre" | "price">(
    "title",
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(event.target.value as "title" | "genre" | "price");
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as "asc" | "desc");
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setFilters({ query: query });
  };

  const sortedBooks = [...libraryStore.books].sort((a, b) => {
    let varA, varB;

    switch (sortField) {
      case "title":
        varA = a.title.toLowerCase();
        varB = b.title.toLowerCase();
        break;
      case "genre":
        varA = a.genre.name.toLowerCase();
        varB = b.genre.name.toLowerCase();
        break;
      case "price":
        varA = calculatePricePerDay(a);
        varB = calculatePricePerDay(b);
        break;
      default:
        return 0;
    }
    if (varA < varB) return sortOrder === "asc" ? -1 : 1;
    if (varA > varB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <Container>
      <PageTitle title={t("txt_available_books")} />
      <div className="mt-5" />
      <div className="mb-4 flex flex-row gap-4 font-phil">
        <select
          onChange={handleSortChange}
          value={sortField}
          className="px-3 py-2 border rounded-lg cursor-pointer"
        >
          <option value="title">
            <Trans i18nKey="txt_sort_title" />
          </option>
          <option value="genre">
            <Trans i18nKey="txt_sort_genre" />
          </option>
          <option value="price">
            <Trans i18nKey="txt_sort_price" />
          </option>
        </select>

        <select
          onChange={handleOrderChange}
          value={sortOrder}
          className="px-3 py-2 border rounded-lg cursor-pointer"
        >
          <option value="asc">
            <Trans i18nKey="txt_sort_asc" />
          </option>
          <option value="desc">
            <Trans i18nKey="txt_sort_dsc" />
          </option>
        </select>
        <form className="flex flex-row gap-4" onSubmit={handleSearch}>
          <input
            className="border border-black rounded-lg"
            type="text"
            placeholder="Пошук книг..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            type="submit"
          >
            Шукати
          </button>
        </form>
      </div>
      <BooksTable books={sortedBooks} />
      <div className="mt-5" />
    </Container>
  );
};

export default observer(AvailableBooksPage);
