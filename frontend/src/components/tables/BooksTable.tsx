import { Book } from "../../types";
import BookCard from "../cards/BookCard.tsx";

interface Props {
  books: Book[];
}

const BooksTable = ({ books }: Props) => {
  return (
    <div className="flex flex-wrap gap-5">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksTable;
