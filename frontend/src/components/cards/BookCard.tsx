import {Book} from "../../types";
import {PAGES, STUBS} from "../../constants";
import {calculatePricePerDay} from "../../utils/books.ts";

interface Props {
    book: Book;
}

const BookCard = ({book}: Props) => {
    const {title, image, author, discounts} = book;

    return (
        <a
            href={PAGES.BOOK.replace(":id", String(book.id))}
            className="p-6 bg-white flex flex-col hover:bg-gray-100 hover:cursor-pointer border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
            <img
                className="object-cover rounded-md w-full md:h-auto md:w-46"
                src={image || STUBS.BOOK_CARD_IMAGE}
                alt=""
            />
            <div className="flex mt-1 justify-between items-end">
                <div className={"flex flex-col gap-y-2"}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal  text-gray-700 dark:text-gray-400">
                        {author.first_name} {author.last_name}
                    </p>
                    <div>{calculatePricePerDay(book)}₴ / день</div>
                </div>
                <div className={"flex flex-col items-end gap-y-2"}>
                    <h5>
                        Знижка
                    </h5>
                    <div>
                        {discounts.map((discount) => (
                            <div key={discount.id}>
                                {discount.discount}%
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default BookCard;
