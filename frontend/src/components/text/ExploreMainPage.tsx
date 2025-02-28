import ExploreButton from "../buttons/ExploreButton.tsx";

const ExploreMainPage = () => (
  <div className="mt-10">
    <div className="mx-5 text-2xl font-phil font-bold w-2xl">
      Бібліоситет - це розмова з найкращими людьми минулих часів, і до того ж з
      найкращими їх думками
    </div>
    <div className="mx-3 mt-5">
      <ExploreButton name="Explore our books" />
    </div>
  </div>
);

export default ExploreMainPage;
