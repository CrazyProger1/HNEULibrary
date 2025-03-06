import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../inputs";
import { LoginFields } from "../../types";

const LoginSchema = z.object({
  username: z.string().email("Введіть коректний імейл"),
  password: z.string().min(6, "Пароль має містити не менше 6 символів"),
});

interface Props {
  onSubmit?: (data: LoginFields) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  return (
    <form
      onSubmit={onSubmit && handleSubmit(onSubmit)}
      className="space-y-5 w-full max-w-sm"
    >
      <h5 className="text-2xl font-bold text-center text-gray-900">
        Увійти до системи
      </h5>

      <FormInput
        label="Ваш імейл"
        type="email"
        placeholder="name@company.com"
        error={errors?.username?.message}
        {...register("username")}
        onBlur={() => trigger("username")}
      />

      <FormInput
        label="Ваш пароль"
        type="password"
        placeholder="••••••••"
        error={errors?.password?.message}
        {...register("password")}
        onBlur={() => trigger("password")}
      />

      <button
        type="submit"
        className="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Завантаження..." : "Увійти до системи"}
      </button>

      <div className="text-sm font-medium text-gray-500">
        Не зареєстровані?{" "}
        <a href="/registration" className="text-blue-700 hover:underline">
          Створити аккаунт
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
