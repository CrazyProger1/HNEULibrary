import ExploreMainPage from "../components/text/ExploreMainPage.tsx";
import { useEffect } from "react";
import { libraryStore } from "../stores";
import BookCard from "../components/cards/BookCard.tsx";
import { Trans } from "react-i18next";
import { observer } from "mobx-react";

const MainPage = () => {
  useEffect(() => {
    libraryStore.getRecommendedBooks();
  }, []);
  return (
    <div className="h-max pb-10">
      <ExploreMainPage />
      <div className={"flex justify-center font-phil text-3xl"}>
        <Trans i18nKey="txt_recommended" />
      </div>
      <div className={"mx-10 mt-5"}>
        <div className="flex flex-wrap justify-center gap-5">
          {libraryStore.recommendedBooks.slice(0,4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(MainPage);
