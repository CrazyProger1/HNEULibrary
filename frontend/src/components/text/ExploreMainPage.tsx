import { Trans } from "react-i18next";
import ButtonExploreBooks from "../buttons/ButtonExploreBooks.tsx";

const ExploreMainPage = () => {
  return (
    <div className="my-10">
      <div className="mx-5 text-2xl font-phil font-bold w-2xl">
        <Trans i18nKey="txt_welcome" />
      </div>
      <div className="mx-3 mt-5">
        <ButtonExploreBooks />
      </div>
    </div>
  );
};
export default ExploreMainPage;
