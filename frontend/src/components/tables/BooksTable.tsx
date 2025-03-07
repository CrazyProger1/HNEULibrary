import {Book} from "../../types";
import BookCard from "../cards/BookCard.tsx";
import React, {useState} from "react";
import {calculatePricePerDay} from "../../utils/books.ts";
import {Trans} from "react-i18next";

interface Props {
    books: Book[];
}

const BooksTable = ({books}: Props) => {
    const [sortField, setSortField] = useState<"title" | "genre" | "price">("title");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortField(event.target.value as "title" | "genre" | "price");
    };

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(event.target.value as "asc" | "desc");
    };

    const sortedBooks = [...books].sort((a, b) => {
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
    })
    return (
        <div>
            <div className="mb-4 flex gap-4 font-phil">
                <select
                    onChange={handleSortChange}
                    value={sortField}
                    className="px-3 py-2 border rounded-lg cursor-pointer"
                >
                    <option value="title"><Trans i18nKey="txt_sort_title"/></option>
                    <option value="genre"><Trans i18nKey="txt_sort_genre"/></option>
                    <option value="price"><Trans i18nKey="txt_sort_price"/></option>
                </select>

                <select
                    onChange={handleOrderChange}
                    value={sortOrder}
                    className="px-3 py-2 border rounded-lg cursor-pointer"
                >
                    <option value="asc"><Trans i18nKey="txt_sort_asc"/></option>
                    <option value="desc"><Trans i18nKey="txt_sort_dsc"/></option>
                </select>
            </div>
            <div className="flex flex-wrap gap-5">
                {sortedBooks.map((book) => (
                    <BookCard key={book.id} book={book}/>
                ))}
            </div>

        </div>
    );
};

export default BooksTable;
