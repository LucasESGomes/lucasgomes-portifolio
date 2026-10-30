import { useState } from "react";

import { navItems } from "../../data/profile.js";
import { scrollToTarget } from "../../hooks/useLenis.js";
import Logo from "../ui/Logo.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (event, target) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToTarget(target);
  };

  return (
    <header className="relative z-[300]">
      <nav className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />

          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <li key={item.target}>
                <a
                  href={item.target}
                  onClick={(event) => handleNavigate(event, item.target)}
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="lg:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1 z-50 relative cursor-pointer"
          >
            <span className={`w-4 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-4 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-4 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={item.target}
                onClick={(event) => handleNavigate(event, item.target)}
                className="text-xl sm:text-2xl text-gray-700 hover:text-black transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
