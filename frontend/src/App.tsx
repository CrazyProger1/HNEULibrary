import {Route, Routes} from "react-router-dom";
import {MainPage, AvailableBooksPage, AboutUsPage} from "./pages";
import {PAGES} from "./constants";
import {Layout} from "./components/layout";

const App = () => (
    <Layout>
        <Routes>
            <Route path={PAGES.MAIN} element={<MainPage/>}/>
            <Route path={PAGES.BOOKS} element={<AvailableBooksPage/>}/>
            <Route path={PAGES.ABOUT} element={<AboutUsPage/>}/>
        </Routes>
    </Layout>
);

export default App;
