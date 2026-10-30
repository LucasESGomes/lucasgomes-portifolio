import { FiExternalLink } from "react-icons/fi";

import ImageWithFallback from "./ImageWithFallback.jsx";

const ProjectCard = ({ title, year, description, context, type, src, link, categories }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100 mb-4">
        <div className="aspect-[4/3] relative">
          <ImageWithFallback
            src={src}
            alt={`Preview do projeto ${title}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            fallback={
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <span className="text-3xl md:text-4xl font-bold tracking-wider text-gray-300">
                  {title}
                </span>
              </div>
            }
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-2">
                <FiExternalLink className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Ver projeto</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
            {title}
          </h3>
          <span className="text-sm text-gray-500">{year}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{context}</span>
          <span className="text-xs text-gray-500">{type}</span>
        </div>
        <div className="flex flex-wrap gap-1 pt-2">
          {categories.map((category) => (
            <span key={category} className="px-2 py-1 text-xs bg-gray-100 text-gray-600">
              {category}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
