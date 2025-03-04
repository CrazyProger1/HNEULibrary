// import LoginPage from "./LoginPage";

import {Navigate} from "react-router-dom";
import AuthStore from "../stores/AuthStore.ts";
import {useEffect} from "react";

const ProfilePage = () => {
    useEffect(() => {
        
    }, []);
    return AuthStore.isAuthorized ? (
        <div className={""}>
            <div className={"flex justify-center mt-10 font-phil text-4xl"}>
                Мій профайл
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Ім'я:
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Прізвище:
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Імейл:
            </div>
            <div className={"flex justify-center mt-10 font-phil text-4xl"}>
                Мої книги
            </div>
        </div>
    ) : (<Navigate to={"/login"}/>);
};

export default ProfilePage;