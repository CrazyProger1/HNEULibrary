import { Route, Routes } from "react-router-dom";
import { MainPage, BooksPage } from "./pages";
import { PAGES } from "./constants";
import { Layout } from "./components/layout";

const App = () => (
  <Layout>
    <Routes>
      <Route path={PAGES.MAIN} element={<MainPage />} />
      <Route path={PAGES.BOOKS} element={<BooksPage />} />
    </Routes>
  </Layout>
);

export default App;
