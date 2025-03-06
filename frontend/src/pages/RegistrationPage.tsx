import { RegistrationForm } from "../components/forms";
import { RegistrationFields } from "../types";
import { useNavigate } from "react-router-dom";
import { authStore } from "../stores";
import { PAGES } from "../constants";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: RegistrationFields) => {
    try {
      await authStore.register({ ...data, username: data.email });
      navigate(PAGES.LOGIN);
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className="flex justify-center mt-10 mb-5">
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
