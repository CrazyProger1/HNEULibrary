import React, {useState} from "react";
import {authStore} from "../stores";

const LoginPage = () => {
    const [formData, setFormData] = useState<{ username: string; password: string }>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        authStore
            .login(formData.username, formData.password)
            .then(() => console.log("JWT: " + authStore.accessToken));
        console.log("Stored Data:", formData); // Just storing in variables
    };

    return (
        <div className={"flex justify-center mt-10 mb-5"}>
            <form onSubmit={handleSubmit} className="space-y-5" action="#">
                <h5 className="text-2xl font-bold font-phil text-center text-gray-900">Увійти до системи</h5>
                <div>
                    <label htmlFor="username"
                           className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Ваш імейл
                    </label>
                    <input name={"username"}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                           placeholder="name@company.com" required
                           value={formData.username}
                           onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Ваш пароль
                    </label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           required
                           value={formData.password}
                           onChange={handleChange}/>
                </div>
                <button type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">
                    Увійти до системи
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Не зареєстровані? <a href="/registration"
                                         className="text-blue-700 hover:underline dark:text-blue-500">
                    Створити аккаунт
                </a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
