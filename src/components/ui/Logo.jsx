import { NavLink } from "react-router-dom";

const Logo = () => {
    return(
        <a href="/" className="hover-scale-105 transition-all duration-300 w-45 pl-2">
            <img src="/public/img/logo-preta-transparente.png" alt="Lucas Gomes logo" className={"h-18"} />
        </a>
    );
}

export default Logo;