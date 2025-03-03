import { observer } from "mobx-react";
import { libraryStore } from "../stores";
import { useEffect } from "react";
import { PageTitle } from "../components/typography";
import { useTranslation } from "react-i18next";
import { BooksTable } from "../components/tables";
import { Container } from "../components/wrappers";

const AvailableBooksPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    libraryStore.getBooks();
  }, []);

  return (
    <Container>
      <PageTitle title={t("txt_available_books")} />
      <div className="mt-5" />
      <BooksTable books={libraryStore.books} />
      <div className="mt-5" />
    </Container>
  );
};

export default observer(AvailableBooksPage);
