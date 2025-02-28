import Logo from "./Logo.tsx";
import HeaderButton from "./HeaderButton.tsx";

const Header = () => {
    const buttonName = ["Доступні книги", "Про нас"]
    return (
        <div className={"flex justify-between items-center p-3 w-full h-20 bg-gray-50"}>
            <Logo/>
            <div className={"flex"}>
                {buttonName.map((btnName) =>
                    <div>
                        <HeaderButton name={btnName}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;