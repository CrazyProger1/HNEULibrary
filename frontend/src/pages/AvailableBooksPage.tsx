import { observer } from "mobx-react";
import { libraryStore } from "../stores";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { PageTitle } from "../components/typography";
import { Trans, useTranslation } from "react-i18next";
import { BooksTable } from "../components/tables";
import { Container } from "../components/wrappers";
import { BookFilters, BookOrdering } from "../types";
import { useSearchParams } from "react-router-dom";

const AvailableBooksPage = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromParams = searchParams.get("query") || "";
  const orderingFromParams = searchParams.get("ordering") as BookOrdering | undefined;

  const [query, setQuery] = useState(queryFromParams);
  const [ordering, setOrdering] = useState<BookOrdering | undefined>(orderingFromParams);

  useEffect(() => {
    const filters: BookFilters = {};
    if (queryFromParams) filters.query = queryFromParams;
    if (orderingFromParams) filters.ordering = orderingFromParams;

    libraryStore.getBooks(filters);
  }, [queryFromParams, orderingFromParams]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("query", query);
      return newParams;
    });
  };

  const handleOrdering = (e: ChangeEvent<HTMLSelectElement>) => {
    const newOrdering = e.target.value as BookOrdering;
    setOrdering(newOrdering);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("ordering", newOrdering);
      return newParams;
    });
  };

  return (
      <Container>
        <PageTitle title={t("txt_available_books")} />
        <div className="mt-5" />
        <div className="mb-4 flex flex-row gap-4 font-phil">
          <select
              onChange={handleOrdering}
              value={ordering || ""}
              className="px-3 py-2 border rounded-lg cursor-pointer"
          >
            <option value="rental_price">
              <Trans i18nKey="txt_sort_asc_rental_price" />
            </option>
            <option value="-rental_price">
              <Trans i18nKey="txt_sort_desc_rental_price" />
            </option>
            <option value="copies">
              <Trans i18nKey="txt_sort_asc_copies" />
            </option>
            <option value="-copies">
              <Trans i18nKey="txt_sort_desc_copies" />
            </option>
            <option value="published_at">
              <Trans i18nKey="txt_sort_asc_published_at" />
            </option>
            <option value="-published_at">
              <Trans i18nKey="txt_sort_desc_published_at" />
            </option>
          </select>
          <form className="flex flex-row gap-4" onSubmit={handleSearch}>
            <input
                className="border border-black rounded-lg px-3 py-2"
                type="text"
                placeholder="Пошук книг..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-bold px-5 py-2.5"
                type="submit"
            >
              Шукати
            </button>
          </form>
        </div>
        <BooksTable books={libraryStore.books} />
        <div className="mt-5" />
      </Container>
  );
};

export default observer(AvailableBooksPage);
