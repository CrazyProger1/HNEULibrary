import {FC, useEffect} from "react";
import LibraryStore from "../stores/LibraryStore";
import {observer} from "mobx-react";

interface SpecificBookPageProps {
    bookId?: number;
}

const SpecificBookPage: FC<SpecificBookPageProps> = () => {

    useEffect(() => {
        LibraryStore
            .getBookById(2)
            .then(() => console.log("Book Title is: " + LibraryStore.book.title))
    }, []);


    return (
        <div className={"flex justify-start items-start gap-40 font-phil m-10"}>
            <img src={LibraryStore.book.image} alt={"Book Cover"}
                 className={"w-80 h-96 border-2 border-black"}/>
            <div className={"flex flex-col justify-center text-left gap-y-4"}>
                <div className={"text-4xl font-bold"}>
                    {LibraryStore.book.title}
                </div>
                <div className={"text-2xl font-medium"}>
                    {LibraryStore.book.author.first_name} {LibraryStore.book.author.last_name}
                </div>
                <div className={"text-xl font-medium"}>
                    Жанр: {LibraryStore.book.genre.name}
                </div>
                <div className={"flex flex-col gap-y-2"}>
                    <div>
                        Ціна прокату: {LibraryStore.book.rental_price} грн.
                    </div>
                    <div>
                        Доступно копій: {LibraryStore.book.available_copies} шт.
                    </div>
                </div>
                <button className={"w-max h-14 p-3 font-bold bg-emerald-300 hover:bg-emerald-400 active:ring-4 active:ring-sky-200 rounded-lg cursor-pointer "}>
                    Взяти у прокат
                </button>
            </div>

        </div>
    );
};

export default observer(SpecificBookPage);