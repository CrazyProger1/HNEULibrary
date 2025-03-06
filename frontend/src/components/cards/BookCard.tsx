import { Book, Discount } from "../../types";
import { PAGES } from "../../constants";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const { title, image, author, rental_price, discounts } = book;

  let totalPrice = Number(rental_price);
  let totalDiscount = 0;

  discounts.forEach((discount: Discount) => {
    totalDiscount += discount.discount;
  });

  totalPrice = totalPrice - totalPrice * (totalDiscount / 100);

  return (
    <a
      href={PAGES.BOOK.replace(":id", String(book.id))}
      className="p-6 bg-white flex flex-col hover:bg-gray-100 hover:cursor-pointer border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="object-cover rounded-md w-full md:h-auto md:w-46"
        src={image || "/src/assets/bibliosity.jpg"}
        alt=""
      />
      <h5 className="mt-auto mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal  text-gray-700 dark:text-gray-400">
        {author.first_name} {author.last_name}
      </p>
      <div>{totalPrice}₴ / day</div>
    </a>
  );
};

export default BookCard;
