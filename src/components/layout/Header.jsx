import { useState, useRef, useEffect } from "react";

//Icons
import { FaArrowRight } from "react-icons/fa6";

//Components
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";

const Header = () => {
  const nav = ["Inicio", "Habilidades", "Projetos", "Serviços", "Contato"];

  const [activeItem, setActiveItem] = useState("Inicio");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef({});

  useEffect(() => {
    updateUnderline(activeItem);
  }, [activeItem]);

  const updateUnderline = (item) => {
    const element = navRefs.current[item];
    if (element) {
      setUnderlineStyle({
        left: element.offsetLeft,
        width: element.offsetWidth,
      });
    }
  };

  const handleClick = (item) => {
    setActiveItem(item);
    // Aqui você pode adicionar a função scrollTo se necessário
    // scrollTo(item.toLowerCase());
  };

  return (
    <>
      <header className="flex w-full bg-transparent items-center h-20 justify-around p-4 text-black sticky top-0 z-10">
        {/* Nav Mobile */}

        <Logo />

        <nav className="md:flex hidden backdrop-blur-sm rounded-full border-2 scale-115 border-gray-300 shadow-md">
          <ul className="relative flex gap-8 rounded-full px-8 py-3 shadow-md">
            {/* Barrinha animada no topo */}
            <span
              className="absolute top-0 h-[3px] bg-black rounded-full transition-all duration-500 ease-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
              }}
            />

            {nav.map((item) => (
              <li
                key={item}
                ref={(el) => (navRefs.current[item] = el)}
                className="relative cursor-pointer transition-all duration-300"
                onClick={() => handleClick(item)}
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeItem === item
                      ? "text-black font-medium"
                      : "text-gray-400"
                  } hover:text-gray-600`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:flex hidden">
          <Button type="default">
            Entre em contato
            <FaArrowRight />
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
