import { Rental } from "../../types";
import { PAGES, STUBS } from "../../constants";
import { BookTitle } from "../typography";

interface Props {
  rental: Rental;
}

const RentalCard = ({ rental }: Props) => {
  const { title, image, author } = rental.book;
  return (
    <a
      href={PAGES.BOOK.replace(":id", String(rental.book.id))}
      className="p-6 bg-white flex flex-col justify-between hover:bg-gray-100 hover:cursor-pointer border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="object-cover rounded-md w-full md:h-auto md:w-46"
        src={image || STUBS.BOOK_CARD_IMAGE}
        alt=""
      />
      <div className="flex mt-1 justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center">
            <BookTitle title={title} />
          </div>

          <p className="font-normal font-phil  text-gray-700 dark:text-gray-400">
            {author?.first_name} {author?.last_name}
          </p>
          <div>
            {rental.started_at} - {rental.ended_at}
          </div>
        </div>
      </div>
    </a>
  );
};

export default RentalCard;
