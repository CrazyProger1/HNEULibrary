import {Navigate} from "react-router-dom";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import UserStore from "../stores/UserStore.ts";

const ProfilePage = observer(() => {

    const [isTokenPresent, setIsTokenPresent] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token != undefined) {
            setIsTokenPresent(true);
            setIsLoading(false);
        } else if (token == undefined) {
            setIsTokenPresent(false);
            setIsLoading(false);
        }
        console.log("JWT: " + token)
    }, []);

    if (isLoading || isTokenPresent == undefined) {
        return (
            <div className={"flex justify-center font-phil text-3xl mt-10"}>
                Loading...
            </div>)
    } else if (isTokenPresent == false) {
        return <Navigate to="/login"/>;
    }

    if (isTokenPresent) {
        const token = localStorage.getItem("accessToken");
        if (token) {
            UserStore
                .getUser(token)
                .then(() => console.log("first name" + UserStore.currentUser.first_name))
        }
    }

    // console.log("isTokenPresent: " + isTokenPresent)
    // console.log("isLoading: " + isLoading)

    return (
        <div className={""}>
            <div className={"flex justify-center mt-10 font-phil text-4xl"}>
                Мій профайл
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Юзернейм: {UserStore.currentUser.username}
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Ім'я: {UserStore.currentUser.first_name}
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Прізвище: {UserStore.currentUser.last_name}
            </div>
            <div className={"flex mt-5 mx-10 font-phil text-xl"}>
                Імейл: {UserStore.currentUser.email}
            </div>
            <div className={"flex justify-center mt-10 font-phil text-4xl"}>
                Мої книги
            </div>
        </div>
    )
});

export default ProfilePage;