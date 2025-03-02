import BookCard from "../components/cards/BookCard.tsx";
import {getBooks} from "../services";

const AvailableBooksPage = () => {

    const booksResult = getBooks();


    // const books = [
    //     {title: "Бесы", author: "Фёдор Достоевский"},
    //     {title: "Стоик", author: "Теодор Драйзер"},
    //     {title: "Блаблабла", author: "Товарищ Блаблаблович"},
    //     {title: "Нанана", author: "Василий Нанаевич"},
    //     {title: "Нанана", author: "Василий Нанаевич"},
    //     {title: "Нанана", author: "Василий Нанаевич"},
    //     {title: "Нанана", author: "Василий Нанаевич"},
    // ];

    return (
        <div className={"h-max pb-20"}>
            <div className={"flex justify-center font-phil text-4xl mt-7"}>
                Доступні книги
            </div>
            <div className={"grid grid-cols-4 justify-center gap-x-5 mx-10 my-10 gap-y-10"}>
                {booksResult.then(books => books.results.map((book) => (<BookCard
                    key={book.id} title={book.title} authorName={book.author.first_name_uk}
                    authorLastName={book.author.last_name_uk}
                />)))}
            </div>
        </div>
    );
};

export default AvailableBooksPage;