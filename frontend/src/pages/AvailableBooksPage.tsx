import BookCard from "../components/cards/BookCard.tsx";

import { observer } from "mobx-react";
import { libraryStore } from "../stores";

const AvailableBooksPage = () => {
  return (
    <div className="h-max pb-20">
      <div className="flex justify-center font-phil text-4xl mt-7">
        Доступні книги
      </div>
      <div
        className={
          "grid grid-cols-4 justify-center gap-x-5 mx-10 my-10 gap-y-10"
        }
      >
        {libraryStore.books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default observer(AvailableBooksPage);
