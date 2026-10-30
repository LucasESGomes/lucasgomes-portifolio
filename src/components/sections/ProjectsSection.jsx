import { useState } from "react";

import { projectFilters, projects } from "../../data/projects.js";
import { profile } from "../../data/profile.js";
import Section from "../layout/Section.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);

  const visibleProjects =
    activeFilter === projectFilters[0]
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <Section id="projetos">
      <div className="mb-12">
        <SectionTitle number="03" title="Projetos">
          <Button href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="shrink-0">
            Ver mais
          </Button>
        </SectionTitle>
      </div>

      <div className="mb-12 flex flex-wrap gap-2 md:gap-4">
        {projectFilters.map((filter) => (
          <Button
            key={filter}
            variant={filter === activeFilter ? "filterActive" : "filter"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
