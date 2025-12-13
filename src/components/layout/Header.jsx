import React, { useState, useRef, useEffect } from "react";
import Lg from "../../../public/img/logo-preta-transparente.png"

// Icons (Assumindo que FaArrowRight e um ícone de menu/fechar estão disponíveis)
import { FaArrowRight } from "react-icons/fa6";
// Placeholder para ícones de menu/fechar, se não houver FaBars/FaTimes
const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Componentes Placeholder (Assumindo que Logo e Button são componentes simples)
const Logo = () => <div className="text-xl font-bold text-black">Logo</div>;
const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
  >
    {children}
  </button>
);

// Dados de Navegação com IDs de Seção
const NAV_ITEMS = [
  { name: "Inicio", id: "inicio-section" },
  { name: "Habilidades", id: "habilidades-section" },
  { name: "Projetos", id: "projetos-section" },
  { name: "Serviços", id: "servicos-section" },
  { name: "Contato", id: "contato-section" },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRefs = useRef({});

  // Lógica de Smooth Scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lógica para atualizar a barra de sublinhado (Desktop)
  const updateUnderline = (item) => {
    const element = navRefs.current[item];
    if (element) {
      setUnderlineStyle({
        left: element.offsetLeft,
        width: element.offsetWidth,
      });
    }
  };

  // Efeito para recalcular a posição da barra ao montar e quando o item ativo muda
  useEffect(() => {
    // Adiciona um pequeno delay para garantir que o DOM foi renderizado
    const timer = setTimeout(() => {
      updateUnderline(activeItem);
    }, 50);

    // Recalcula ao redimensionar a janela
    const handleResize = () => updateUnderline(activeItem);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeItem]);

  // Lógica de clique: navega e define o item ativo
  const handleClick = (item, sectionId) => {
    setActiveItem(item);
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Fecha o menu mobile após o clique
  };

  return (
    <header
      id="header-section"
      className="absolute top-0 w-full z-50 transition-all duration-300"
    >
      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img src={Lg} className="h-15 w-auto"/>

        {/* Nav Desktop */}
        <nav className="hidden md:flex backdrop-blur-sm rounded-full border-2 border-gray-300 shadow-md">
          <ul className="relative flex gap-8 rounded-full px-8 py-3">
            {/* Barrinha animada no topo */}
            <span
              className="absolute bottom-0 h-[3px] bg-black rounded-full transition-all duration-500 ease-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
              }}
            />

            {NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                ref={(el) => (navRefs.current[item.name] = el)}
                className="relative cursor-pointer transition-all duration-300"
                onClick={() => handleClick(item.name, item.id)}
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeItem === item.name
                      ? "text-black font-medium"
                      : "text-gray-500"
                  } hover:text-black`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão de Contato (Desktop) */}
        <div className="hidden md:flex">
          <Button
            type="default"
            onClick={() => handleClick("Contato", "contato-section")}
          >
            Entre em contato
            <FaArrowRight />
          </Button>
        </div>

        {/* Botão de Menu Mobile */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile (Overlay) */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="block py-3 text-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200 px-4"
              onClick={() => handleClick(item.name, item.id)}
            >
              {item.name}
            </a>
          ))}
          <div className="p-4">
            <Button
              type="default"
              onClick={() => handleClick("Contato", "contato-section")}
            >
              Entre em contato
              <FaArrowRight />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
