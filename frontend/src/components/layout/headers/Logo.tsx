import bibliosity from "/src/assets/bibliosity22.png";

const Logo = () => (
    <a href={"/"}>
        <button
            className={
                "flex items-center w-max h-max text-4xl font-logo cursor-pointer hover:bg-white rounded-lg p-2"
            }
        >
            <img src={bibliosity} alt={"Logo"} className={"w-12 h-12 rounded-lg"}/>{" "}
            <span>Бібліоситет</span>
        </button>
    </a>
);

export default Logo;
