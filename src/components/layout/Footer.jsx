import React from "react";

// --- Ícones (SVG simples como componentes) ---

// Ícone do LinkedIn
const LinkedinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.12-.38-1.88-1.42-1.88a1.75 1.75 0 00-1.75 1.75V19h-3v-9h3v1.25c.5-.75 1.25-1.25 2.25-1.25 1.5 0 2.5 1 2.5 3.25z" />
  </svg>
);

// Ícone do GitHub
const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.867 8.165 6.84 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.67-1.334-2.22-.253-4.555-1.116-4.555-4.953 0-1.092.39-1.983 1.029-2.689-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.022A9.632 9.632 0 0112 6.87c.85.004 1.705.115 2.504.337 1.909-1.292 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65.64.706 1.028 1.597 1.028 2.689 0 3.848-2.334 4.691-4.566 4.943.359.309.678.92.678 1.855 0 1.334-.012 2.41-.012 2.737 0 .267.18.577.688.484C19.137 20.18 22 16.432 22 12.017 22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

// Ícone do Instagram
const InstagramIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-1.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Ícone de Ponto Verde (Status Online)
const OnlineDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>
);

// --- Mock Data ---
const PROFILE_DATA = {
  name: "Lucas Gomes",
  role: "Desenvolvedor de web design",
  profilePic: "../../../public/img/Gomes.webp", // Substitua pelo caminho real da sua imagem
  isOnline: true,
};

const QUICK_NAV = [
  { name: "Baixar CV", href: "#" },
  { name: "Habilidades", href: "#" },
  { name: "Projetos", href: "#" },
  { name: "Serviços", href: "#" },
];

const SOCIAL_LINKS = [
  { name: "Linkedin", href: "#", icon: LinkedinIcon },
  { name: "Github", href: "#", icon: GithubIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
];

const CONTACT_INFO = {
  email: "lucasgomesferreira2008@gmail.com",
  phone: "+55 (11) 98646-8289",
};

// --- Componente Auxiliar para Links ---
const FooterLink = ({ href, children, Icon }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm mb-2"
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </a>
);

// --- Componente Principal: Footer ---
const Footer = () => {
  return (
    <section id="contato-section">
      <footer className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto bg-gray-900 text-white rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Coluna 1: Resumo geral */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resumo geral</h4>
              <div className="flex items-start gap-4">
                {/* Imagem de Perfil */}
                <img
                  src={PROFILE_DATA.profilePic}
                  alt={PROFILE_DATA.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-lg">{PROFILE_DATA.name}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    {PROFILE_DATA.isOnline && <OnlineDot />}
                    <span>{PROFILE_DATA.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Navegação rápida */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navegação rápida</h4>
              <nav className="flex flex-col">
                {QUICK_NAV.map((item) => (
                  <FooterLink key={item.name} href={item.href}>
                    {item.name}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Coluna 3: Redes sociais */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Redes sociais</h4>
              <nav className="flex flex-col">
                {SOCIAL_LINKS.map((item) => (
                  <FooterLink key={item.name} href={item.href} Icon={item.icon}>
                    {item.name}
                  </FooterLink>
                ))}
              </nav>
            </div>

            {/* Coluna 4: Entre em contato */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Entre em contato</h4>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm underline"
                >
                  {CONTACT_INFO.email}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
