const RegistrationPage = () => {
    return (
        <div className={"flex justify-center mt-10 mb-5"}>
            <form className="space-y-5" action="#">
                <h5 className="text-2xl font-bold font-phil text-center text-gray-900">
                    Реєстрація у Бібліоситеті
                </h5>
                <div className={"flex gap-5"}>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Ваше ім'я
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Олександр" required/>
                    </div>
                    <div>
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Ваше прізвище
                        </label>
                        <input placeholder="Шевченко"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               />
                    </div>
                </div>
                <div className={"flex gap-5"}>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Мобільний номер
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="0971234567" required/>
                    </div>
                    <div>
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Ваша адреса
                        </label>
                        <input placeholder="пр. Науки 9-А"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               required/>
                    </div>
                </div>
                <div className={"flex gap-5"}>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Ваш імейл
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                            Ваш нікнейм
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="john123" required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Ваш імейл
                    </label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com" required/>
                </div>
                <div>
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Придумайте пароль
                    </label>
                    <input placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           required/>
                </div>
                <button type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">
                    Зареєструватися!
                </button>
                <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
                    Вже зареєстровані? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">
                    &nbsp; Увійдіть до системи
                </a>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;
