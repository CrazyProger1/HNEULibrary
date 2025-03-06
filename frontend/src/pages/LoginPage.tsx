import { LoginForm } from "../components/forms";
import { LoginFields } from "../types";
import { authStore } from "../stores";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../constants";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: LoginFields) => {
    try {
      await authStore.login(data);
      if (authStore.isAuthenticated) navigate(PAGES.PROFILE);
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className="flex justify-center mt-10 mb-5">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
