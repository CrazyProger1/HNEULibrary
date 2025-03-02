interface HeaderButtonProps {
    name: string;
    link: string;
}

const HeaderButton = ({name, link}: HeaderButtonProps) => {
    return (
        <a href={`${link}`}>
            <button className={
                "font-phil text-xl text-bold p-2 m-3 w-max cursor-pointer hover:bg-white rounded-lg"
            }>
                {name}
            </button>
        </a>
    );
};

export default HeaderButton;
