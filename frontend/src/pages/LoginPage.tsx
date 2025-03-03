import { useEffect } from "react";
import { authStore } from "../stores";

const LoginPage = () => {
  useEffect(() => {
    authStore
      .login("username", "password")
      .then((r) => console.log(authStore.accessToken));
  }, []);
  return <div></div>;
};

export default LoginPage;
