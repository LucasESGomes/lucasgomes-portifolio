import Section from "../layout/Section.jsx"
import Button from "../ui/Button.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";

//Images
import SenaiId from "../../../public/img/senai-id.png";

const ProjectsSection = () => {
    return (
      <Section id={"projetos"} number={"03"} title={"Projetos"}>
        <div className="flex gap-2 mt-15">
          <Button type="service" children={"Ver todos"} />
          <Button type="service" children={"Front-end"} />
          <Button type="service" children={"Back-end"} />
          <Button type="service" children={"Full-stack"} />
        </div>
        <div className="mt-25">
            <ProjectCard 
                img={SenaiId}
            />
        </div>
      </Section>
    );
}

export default ProjectsSection;