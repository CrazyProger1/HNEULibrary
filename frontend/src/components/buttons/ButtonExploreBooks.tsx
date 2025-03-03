import { Trans } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import Button from "./Button.tsx";

const ButtonExploreBooks = () => (
  <Button key="btn_explore_books">
    <Trans i18nKey="btn_explore_books" />
    <IoIosArrowForward />
  </Button>
);

export default ButtonExploreBooks;
