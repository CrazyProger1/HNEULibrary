import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useNavigate, useParams } from "react-router-dom";
import { libraryStore } from "../stores";
import {
  calculateDiscount,
  calculatePricePerDay,
  calculatePricePerPeriod,
} from "../utils/books.ts";
import { PAGES, STUBS } from "../constants";
import { Note } from "../components/typography";

const SpecificBookPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [period, setPeriod] = useState<number>(0);

  useEffect(() => {
    libraryStore.getBookById(Number(id)).then(() => {
      if (!libraryStore.book) navigate(PAGES.BOOKS);
    });
  }, []);

  const book = libraryStore.book;

  const totalDiscount = book && calculateDiscount(book);
  const perDayPrice = book && calculatePricePerDay(book);
  const perPeriodPrice = book && calculatePricePerPeriod(book, period);

  return (
    <div className={"flex justify-start items-start font-phil m-10"}>
      <img
        src={book?.image || STUBS.BOOK_IMAGE}
        alt={"Book Cover"}
        className={"w-80 h-96 border-2 border-black"}
      />
      <div className={"flex ml-10 flex-col gap-y-4"}>
        <div className={"text-4xl font-bold"}>{book?.title}</div>
        <a
          href={PAGES.BOOKS + `?query=${book?.author?.last_name}`}
          className={"text-2xl font-medium underline cursor-pointer font-semibold"}
        >
          {book?.author?.first_name} {book?.author?.last_name}
        </a>
        <div className={"text-xl font-semibold"}>
          <a
            className="underline cursor-pointer"
            href={PAGES.BOOKS + `?query=${book?.genre.name}`}
          >
            {book?.genre.name}
          </a>
        </div>
        <div className={"flex flex-col gap-y-2"}>
          <div>Ціна прокату: {book?.rental_price} грн.</div>
          <div>Застава: {book?.deposit_price} грн.</div>

          <div className="flex flex-row font-phil">
            Персональна ціна прокату: {perDayPrice} грн.{" "}
            {totalDiscount && totalDiscount > 0 && (
              <Note text={`знижка ${totalDiscount}%!`} />
            )}
          </div>
          <div>Доступно копій: {book?.available_copies} шт.</div>

          <div>
            <div className="font-semibold font-phil mt-4">
              Розрахунок вартості аренди
            </div>
            <label className="block text-gray-900">
              Введіть період (у днях):
            </label>
            <input
              className="border rounded-lg"
              type="number"
              onChange={(e) => setPeriod(Math.max(Number(e.target.value), 0))}
              value={period > 0 ? period : ""}
            />
            <div className="flex flex-row">
              ({book?.rental_price} грн. - {totalDiscount}%) * {period} дн. ={" "}
              {perPeriodPrice} грн.
              <Note text="без урахування застави" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(SpecificBookPage);
