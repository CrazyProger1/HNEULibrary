import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { authStore } from "../stores";

import { PAGES } from "../constants";
import { User } from "../types";

const ProfilePage = observer(() => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    authStore.getCurrentUser().then((user) => {
      if (!user) navigate(PAGES.LOGIN);
      setCurrentUser(user);
    });
  }, []);

  const handleLogoutClick = () => {
    authStore.logout().then(() => {
      navigate(PAGES.LOGIN);
    });
  };

  return (
    <div>
      <div className={"flex justify-center mt-10 font-phil text-4xl"}>
        Мій профайл
      </div>
      <div className={"flex flex-col gap-y-5 mx-10 font-phil text-xl"}>
        <div>Ім'я: {currentUser?.first_name || "Loading..."} </div>
        <div>Прізвище: {currentUser?.last_name || "Loading..."}</div>
        <div>Імейл: {currentUser?.email || "Loading..."}</div>
      </div>
      <div className={"flex justify-center mt-10 font-phil text-4xl"}>
        Мої книги
      </div>
      <div className="flex flex-col font-phil">
        <div className="mt-10 text-4xl text-center">Вихід з аккаунту</div>
        <div className="mt-5 text-xl ml-10 ">
          Якщо ви бажаєте вийти з аккаунту, натисніть кнопку нижче
        </div>
        <button
          onClick={handleLogoutClick}
          className={
            "ml-10  my-5 p-3 w-max h-12 text-white bg-red-500 hover:bg-red-700 font-bold rounded-lg active:ring-3 active:ring-sky-400 cursor-pointer"
          }
        >
          Вийти з аккаунту
        </button>
      </div>
    </div>
  );
});

export default ProfilePage;
