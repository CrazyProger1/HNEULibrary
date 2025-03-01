import Header from "../components/layout/headers/Header.tsx";
import ExploreMainPage from "../components/text/ExploreMainPage.tsx";
import Footer from "../components/layout/footers/Footer.tsx";

const MainPage = () => {
    return (
        <div className={"h-max pb-20"}>
            <div>
                <Header/>
            </div>
            <ExploreMainPage/>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainPage;
