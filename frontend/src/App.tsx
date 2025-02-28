import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import { PAGES } from "./constants";

const App = () => (
  <div className="h-screen bg-white">
    <Routes>
      <Route path={PAGES.MAIN} element={<MainPage />} />
    </Routes>
  </div>
);

export default App;
