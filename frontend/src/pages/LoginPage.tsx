import { LoginForm } from "../components/forms";
import { LoginFields } from "../types";
import { authStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../constants";

const LoginPage = () => {
  const navigate = useNavigate();
  const onSubmit = async ({ username, password }: LoginFields) => {
    try {
      await authStore.login(username, password);
      if (authStore.accessToken) navigate(PAGES.PROFILE);
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className="flex justify-center mt-10 mb-5">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
