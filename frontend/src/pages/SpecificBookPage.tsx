import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { libraryStore } from "../stores";
import { calculatePricePerPeriod } from "../utils/books.ts";

const SpecificBookPage = () => {
  let { id } = useParams();

  const [period, setPeriod] = useState<number>(0);

  useEffect(() => {
    libraryStore.getBookById(Number(id));
  }, []);

  const book = libraryStore.book;
  const { image, author, rental_price, available_copies, genre, title } = book;

  return (
    <div className={"flex justify-start items-start font-phil m-10"}>
      <img
        src={image}
        alt={"Book Cover"}
        className={"w-80 h-96 border-2 border-black"}
      />
      <div className={"flex ml-10 flex-col justify-center text-left gap-y-4"}>
        <div className={"text-4xl font-bold"}>{title}</div>
        <div className={"text-2xl font-medium"}>
          {author.first_name} {author.last_name}
        </div>
        <div className={"text-xl font-medium"}>Жанр: {genre.name}</div>
        <div className={"flex flex-col gap-y-2"}>
          <div>Ціна прокату: {rental_price} грн.</div>
          <div>Доступно копій: {available_copies} шт.</div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900">
              Введіть період (у днях):
            </label>
            <input
              type="number"
              onChange={(e) => setPeriod(Number(e.target.value))}
            />
            <div>{calculatePricePerPeriod(book, period)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(SpecificBookPage);
