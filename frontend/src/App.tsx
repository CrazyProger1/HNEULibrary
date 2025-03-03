import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { PAGES } from "./constants";
import { AboutUsPage, AvailableBooksPage, MainPage } from "./pages";

const App = () => (
  <Layout>
    <Routes>
      <Route path={PAGES.MAIN} element={<MainPage />} />
      <Route path={PAGES.BOOKS} element={<AvailableBooksPage />} />
      <Route path={PAGES.ABOUT} element={<AboutUsPage />} />
    </Routes>
  </Layout>
);

export default App;
