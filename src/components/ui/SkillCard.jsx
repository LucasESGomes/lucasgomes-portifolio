import React from "react";

const SkillCard = ({ img, title, children, tech, version = "right" }) => {
  // Classe base para o container de conteúdo (preto)
  const contentBaseClasses =
    "bg-black w-full md:w-1/2 text-white p-8 md:p-12 flex flex-col justify-center";

  // Classe base para o container de imagem (branco)
  const imageBaseClasses = "bg-white w-full md:w-1/2";

  // Classe base para o container principal
  // flex-col para mobile, md:flex-row para desktop, w-full e margin padronizada
  const containerBaseClasses = "flex flex-col w-full mb-16";

  // Estilos para o título (replicando a estética grande e ousada)
  const titleClasses =
    "text-5xl sm:text-6xl md:text-7xl font-semibold block mb-8";

  // Estilos para a imagem
  const imageClasses = "w-full h-full object-cover";

  if (version === "left") {
    // Layout: Imagem (Esquerda) | Conteúdo (Direita)
    return (
      <div className={`${containerBaseClasses} md:flex-row`}>
        {/* Imagem (Esquerda) */}
        <div className={imageBaseClasses}>
          <img
            src={img}
            alt={`Imagem para ${title}`}
            className={imageClasses}
          />
        </div>

        {/* Conteúdo (Direita) */}
        <div className={contentBaseClasses}>
          <span className={titleClasses}>{title}</span>
          <p className="mb-12">{children}</p>
          <p className="mt-auto mb-4 font-medium">Tecnologias:</p>
          {/* O prop 'tech' deve ser um elemento React (ex: um div com tags) */}
          {tech}
        </div>
      </div>
    );
  }

  // Layout Padrão (version === "right"): Conteúdo (Esquerda) | Imagem (Direita)
  return (
    <div className={`${containerBaseClasses} md:flex-row-reverse`}>
      {/* Conteúdo (Esquerda) */}
      <div className={contentBaseClasses}>
        {title && <span className={titleClasses}>{title}</span>}
        <p className="mb-12">{children}</p>
        <p className="mt-auto mb-4 font-medium">Tecnologias:</p>
        {/* O prop 'tech' deve ser um elemento React (ex: um div com tags) */}
        {tech}
      </div>

      {/* Imagem (Direita) */}
      <div className={imageBaseClasses}>
        <img src={img} alt={`Imagem para ${title}`} className={imageClasses} />
      </div>
    </div>
  );
};

export default SkillCard;
