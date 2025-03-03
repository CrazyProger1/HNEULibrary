import { Book } from "../../types";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  const { title, image, author } = book;
  return (
    <div className="w-64 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/src/assets/bibliosity.jpg"
        alt=""
      />
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {author.first_name} {author.last_name}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Взяти в оренду
      </a>
    </div>
  );
};

export default BookCard;
