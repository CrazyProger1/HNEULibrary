import BookCard from "../components/cards/BookCard.tsx";

import { observer } from "mobx-react";
import { libraryStore } from "../stores";
import { useEffect } from "react";

const AvailableBooksPage = () => {
  useEffect(() => {
    libraryStore.getBooks();
  }, []);
  return (
    <div className="h-max pb-20">
      <div className="flex justify-center font-phil text-4xl mt-7">
        Доступні книги
      </div>
      <div className="flex flex-wrap gap-5">
        {libraryStore.books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default observer(AvailableBooksPage);
