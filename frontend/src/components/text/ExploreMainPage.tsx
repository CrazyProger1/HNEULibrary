import ExploreButton from "../buttons/ExploreButton.tsx";
import BookCardMainPage from "../cards/BookCardMainPage.tsx";

const ExploreMainPage = () => {
        const booksMainPage = [
            {author: "М. Булгаков", name: "Собачье сердце"},
            {author: "Ф. Достоевский", name: "Преступление и наказание"},
            {author: "А. Пушкин", name: "Пиковая дама"},
            {author: "Т. Шевченко", name: "Катерина"},
        ]
        return (
            <div className="my-10">
                <div className="mx-5 text-2xl font-phil font-bold w-2xl">
                    Бібліоситет - це розмова з найкращими людьми минулих часів, і до того ж з
                    найкращими їх думками.
                </div>
                <div className="mx-3 mt-5">
                    <ExploreButton name="Explore our books"/>
                </div>
                <div className={"flex gap-5 m-5"}>
                    {booksMainPage.map((book) => (
                        <div>
                            <BookCardMainPage title={book.name} author={book.author}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
;

export default ExploreMainPage;
