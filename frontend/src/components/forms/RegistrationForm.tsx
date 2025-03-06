import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../inputs";
import { RegistrationFields } from "../../types";

const RegistrationSchema = z.object({
  first_name: z.string().min(2, "Ім'я повинно містити не менше 2 символів"),
  last_name: z.string().min(2, "Прізвище повинно містити не менше 2 символів"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Введіть коректний номер (10 цифр)")
    .optional()
    .or(z.literal("")),
  address: z
    .string()
    .min(5, "Адреса повинна містити не менше 5 символів")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Введіть коректний імейл"),
  username: z
    .string()
    .min(3, "Нікнейм має містити не менше 3 символів")
    .optional()
    .or(z.literal("")),
  password: z.string().min(6, "Пароль має містити не менше 6 символів"),
});

interface Props {
  onSubmit: (data: RegistrationFields) => void;
}

const RegistrationForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm({
    resolver: zodResolver(RegistrationSchema),
    mode: "onBlur",
  });

  return (
    <form
      onSubmit={onSubmit && handleSubmit(onSubmit)}
      className="space-y-5 w-full max-w-sm"
    >
      <h5 className="text-2xl font-bold text-center text-gray-900">
        Реєстрація у Бібліоситеті
      </h5>

      <FormInput
        label="Ваше ім'я"
        type="text"
        placeholder="Олександр"
        error={errors?.first_name?.message}
        {...register("first_name")}
        onBlur={() => trigger("first_name")}
      />

      <FormInput
        label="Ваше прізвище"
        type="text"
        placeholder="Шевченко"
        error={errors?.last_name?.message}
        {...register("last_name")}
        onBlur={() => trigger("last_name")}
      />

      <FormInput
        label="Мобільний номер"
        type="text"
        placeholder="0971234567"
        error={errors?.phone?.message}
        {...register("phone")}
        onBlur={() => trigger("phone")}
      />

      <FormInput
        label="Ваша адреса"
        type="text"
        placeholder="пр. Науки 9-А"
        error={errors?.address?.message}
        {...register("address")}
        onBlur={() => trigger("address")}
      />

      <FormInput
        label="Ваш імейл"
        type="email"
        placeholder="name@company.com"
        error={errors?.email?.message}
        {...register("email")}
        onBlur={() => trigger("email")}
      />

      <FormInput
        disabled={true}
        label="Ваш нікнейм (в розробці)"
        type="text"
        placeholder="john123"
        error={errors?.username?.message}
        {...register("username")}
        onBlur={() => trigger("username")}
      />

      <FormInput
        label="Придумайте пароль"
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
        {isSubmitting ? "Завантаження..." : "Зареєструватися!"}
      </button>

      <div className="text-sm font-medium text-gray-500">
        Вже зареєстровані?{" "}
        <a href="/login" className="text-blue-700 hover:underline">
          Увійдіть до системи
        </a>
      </div>
    </form>
  );
};

export default RegistrationForm;
