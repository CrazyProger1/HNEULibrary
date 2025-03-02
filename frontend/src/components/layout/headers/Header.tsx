import Logo from "./Logo.tsx";
import HeaderButton from "./HeaderButton.tsx";


const Header = () => {
    const buttonName = [{name: "Доступні книги", link: "/books"},
        {name: "Про нас", link: "/about"}];
    return (
        <div className="flex justify-between items-center p-3 w-full h-20 bg-gray-50">
            <Logo/>
            <div className="flex">
                {buttonName.map((btnName, index) => (
                    <div key={index}>
                        <HeaderButton name={btnName.name} link={btnName.link}/>
                    </div>
                ))}
                <button
                    className={"font-phil text-xl text-bold p-2 m-3 w-max cursor-pointer hover:bg-white rounded-lg"}>
                    Мій кабінет
                </button>
            </div>
        </div>
    );
};

export default Header;
