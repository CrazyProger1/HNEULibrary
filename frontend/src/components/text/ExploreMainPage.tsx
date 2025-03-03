import Button from "../buttons/Button.tsx";
import BookCard from "../cards/BookCard.tsx";
import { Trans } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { Book } from "../../types";

const ExploreMainPage = () => {
  const booksMainPage: Book[] = [];
  return (
    <div className="my-10">
      <div className="mx-5 text-2xl font-phil font-bold w-2xl">
        <Trans i18nKey="txt_welcome" />
      </div>
      <div className="mx-3 mt-5">
        <Button key="btn_explore_books">
          <Trans i18nKey="btn_explore_books" />
          <IoIosArrowForward />
        </Button>
      </div>
      <div className={"flex gap-5 m-5"}>
        {booksMainPage.map((book) => (
          <div>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExploreMainPage;
