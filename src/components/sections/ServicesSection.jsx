import React from "react";
import Section from "../layout/Section"
import SectionTitle from "../ui/SectionTitle.jsx";

// --- Ícones (SVG simples como componentes) ---
const CodeIcon = (props) => (
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
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25"
    />
  </svg>
);

const GlobeIcon = (props) => (
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
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3.75c-3.9 0-7.25 2.8-7.25 6.25s3.35 6.25 7.25 6.25S19.25 14.2 19.25 10s-3.35-6.25-7.25-6.25z"
    />
  </svg>
);

const LayoutIcon = (props) => (
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
      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
    />
  </svg>
);

const CartIcon = (props) => (
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
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.836A.75.75 0 0016.5 6H5.25"
    />
  </svg>
);

const ArrowRightIcon = (props) => (
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
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

// --- Mock Data para os Serviços ---
const MOCK_SERVICES = [
  {
    id: 1,
    number: "01",
    icon: <CodeIcon className="w-6 h-6 text-gray-500" />,
    title: "Sites corporativos",
    description:
      "Desenvolvimento de websites profissionais para empresas, com design moderno e responsivo que transmite credibilidade, além de reforçar a identidade visual da marca.",
    tags: [
      "Design Thinking",
      "Design Responsivo",
      "SEO Otimizado",
      "Clientes notificados",
      "Integração com Redes Sociais",
    ],
    link: "#",
  },
  {
    id: 2,
    number: "02",
    icon: <GlobeIcon className="w-6 h-6 text-gray-500" />,
    title: "Sites estáticos",
    description:
      "Sites ágeis seguros e otimizados, desenvolvidos com tecnologias modernas, ideal para aplicações como landing pages.",
    tags: ["Alta performance", "Alta segurança", "Baixo custo"],
    link: "#",
  },
  {
    id: 3,
    number: "03",
    icon: <LayoutIcon className="w-6 h-6 text-gray-500" />,
    title: "Sistema personalizado",
    description:
      "Soluções personalizadas para automação de processos e garantir maior eficiência durante a utilização.",
    tags: ["Relatórios detalhados", "Multi-usuários", "Backup em Nuvem"],
    link: "#",
  },
  {
    id: 4,
    number: "04",
    icon: <CartIcon className="w-6 h-6 text-gray-500" />,
    title: "E-commerce",
    description:
      "Criação de um E-commerce seguro e com alta escalabilidade, além de proporcionar que diversos anunciantes publiquem seus produtos no sistema.",
    tags: [
      "Criação de relatórios",
      "Geração de métricas",
      "Design responsivo",
      "UI/UX Design",
    ],
    link: "#",
  },
];

// --- Componente de Cartão de Serviço ---
const ServiceCard = ({ service }) => {
  return (
    <div className="relative flex flex-col justify-between p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-6xl font-bold text-gray-200">
              {service.number}
            </span>
            <div className="p-2 border border-gray-300 rounded-md">
              {service.icon}
            </div>
          </div>
          <a
            href={service.link}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            <ArrowRightIcon className="w-4 h-4" />
            Mais informações
          </a>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6">{service.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- Componente Principal: ServicesSection ---
const ServicesSection = () => {
  return (
    <section id="servicos-section">
      <Section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mt-35 mx-auto">
          <SectionTitle number="04" title="Serviços" />
          <div className="grid mt-20 grid-cols-1 lg:grid-cols-2 gap-8">
            {MOCK_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
};

export default ServicesSection;
