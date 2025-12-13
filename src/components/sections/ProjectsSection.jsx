import React, { useState, useMemo } from "react";
import SectionTitle from "../ui/SectionTitle.jsx";
import Section from "../layout/Section.jsx"

// Ícone de link externo (SVG simples)
const ExternalLinkIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

// --- Mock Data para os Projetos ---
const MOCK_PROJECTS = [
  {
    id: 1,
    category: "Full-stack",
    title: "Senai ID",
    description:
      "Um sistema dedicado ao TCC do Senai, que possibilita o gerenciamento de atrasos dos alunos.",
    image: "../../../public/img/senai-id.png", // Substitua pelo caminho real da sua imagem
    link: "https://senai-id.vercel.app/",
    techs: [
      "React",
      "Tailwindcss",
      "Node",
      "Express",
      "MongoDB",
      "Vite",
      "Vercel",
    ],
  },
  {
    id: 2,
    category: "Full-stack",
    title: "Auto Fix",
    description:
      "Um sistema que possui CRUD completo, e permite que os clientes de uma oficina realizem orçamentos on-line.",
    image: "../../../public/img/autoFix.png", // Substitua pelo caminho real da sua imagem
    link: "https://auto-fix.vercel.app/",
    techs: ["React", "Tailwindcss", "Node", "Express", "Vite", "Vercel"],
  }
];

// --- Componente de Cartão de Projeto ---
const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl">
      {/* Área da Imagem com Hover Effect */}
      <div className="relative overflow-hidden">
        {/* Imagem do Projeto */}
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Escuro e Botão de Visualizar (Visível no Hover) */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-30"
        >
          <div className="flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* Ícone de Redirecionamento */}
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white text-white transition-colors duration-300 hover:bg-white hover:text-black">
              <ExternalLinkIcon className="w-8 h-8" />
            </div>
            {/* Texto "Visualizar projeto" */}
            <span className="mt-2 text-white text-sm font-semibold uppercase tracking-wider">
              Visualizar projeto
            </span>
          </div>
        </a>
      </div>

      {/* Detalhes do Projeto */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>

        {/* Tags de Tecnologia */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Componente Principal: ProjectsSection ---
const ProjectsSection = () => {
  const categories = ["Ver todos", "Front-end", "Back-end", "Full-stack"];
  const [activeFilter, setActiveFilter] = useState(categories[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Ver todos") {
      return MOCK_PROJECTS;
    }
    // Normaliza a categoria para comparação (ex: 'Front-end' -> 'Front-end')
    const normalizedFilter = activeFilter.replace("-", " ");
    return MOCK_PROJECTS.filter(
      (project) =>
        project.category.toLowerCase() === normalizedFilter.toLowerCase()
    );
  }, [activeFilter]);

  // Estilo base para os botões de filtro
  const filterButtonBase =
    "px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-300";

  return (
    <section id="projetos-section">
      <Section>
        <div className="max-w-7xl mt-20 mx-auto">
          <SectionTitle number={"03"} title={"Projetos"} />
          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-start mt-20 gap-3 mb-15">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`${filterButtonBase} ${
                  activeFilter === category
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de Projetos (Responsivo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Mensagem de fallback se não houver projetos */}
          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-500 text-lg">
              Nenhum projeto encontrado na categoria "{activeFilter}".
            </p>
          )}
        </div>
      </Section>
    </section>
  );
};

export default ProjectsSection;
