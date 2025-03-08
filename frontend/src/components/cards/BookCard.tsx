import {Book} from "../../types";
import {PAGES, STUBS} from "../../constants";
import {calculateDiscount, calculatePricePerDay} from "../../utils/books.ts";
import {BookTitle, Note} from "../typography";

interface Props {
    book: Book;
}

const BookCard = ({book}: Props) => {
    const {title, image, author, available_copies} = book;
    const totalDiscount = calculateDiscount(book);
    return (
        <a
            href={PAGES.BOOK.replace(":id", String(book.id))}
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
                        <BookTitle title={title}/>
                    </div>
                    <p className="font-normal font-phil  text-gray-700 dark:text-gray-400">
                        {author?.first_name} {author?.last_name}
                    </p>
                    <div className={"flex"}>
                        <div className="flex flex-row font-phil">
                            {calculatePricePerDay(book)} грн. / день{" "}
                            {totalDiscount > 0 && <Note text={`знижка ${totalDiscount}%!`}/>}
                        </div>
                        <div className="flex items-center ml-2 font-phil text-gray-700 text-md">
                            &mdash; x{available_copies} шт.
                        </div>
                    </div>

                </div>
            </div>
        </a>
    );
};

export default BookCard;
