import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, children, img, tech }) => {
  return (
    <div className="group overflow-hidden h-150 w-fit ">
      <div className="w-full h-full">
        <img
          className="w-165 h-125 object-cover transition-transform duration-500 group-hover-scale-105"
          src={img}
          alt={`Preview do projeto ${title}`}
        />
        <a 
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-60">
          <div className="flex flex-col justify-center itens-center">
            <div className="flex justify-center items-center p-3.5 w-fit rounded-full border-1 border-black">
              <FiExternalLink size={23} className="" />
            </div>
            <span>Visualizar o projeto</span>
          </div>
        </a>
      </div>
      <div>
        {title}
        {children}
        {tech}
      </div>
    </div>
  );
};

export default ProjectCard;
