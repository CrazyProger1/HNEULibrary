import './App.css'
import Header from "./components/headers/Header.tsx";
import ExploreMainPage from "./components/text/ExploreMainPage.tsx";

function App() {

    return (
        <div className={"h-screen bg-white"}>
            <div>
                <Header/>
            </div>
            <ExploreMainPage/>
        </div>
    )
}

export default App
