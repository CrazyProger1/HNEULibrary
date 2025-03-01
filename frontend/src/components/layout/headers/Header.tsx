import Logo from "./Logo.tsx";
import HeaderButton from "./HeaderButton.tsx";


const Header = () => {
  const buttonName = ["Доступні книги", "Про нас"];
  return (
    <div className="flex justify-between items-center p-3 w-full h-20 bg-gray-50">
      <Logo />
      <div className="flex">
        {buttonName.map((btnName) => (
          <div>
            <HeaderButton name={btnName} />
          </div>
        ))}
          <button className={"font-phil text-xl text-bold p-2 m-3 w-max cursor-pointer hover:bg-white rounded-lg"}>
              Мій кабінет
          </button>
      </div>
    </div>
  );
};

export default Header;
