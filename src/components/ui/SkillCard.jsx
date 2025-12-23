const SkillCard = ({ img, title, children, tech, version = "right" }) => {
  if (version === "left") {
    return (
      <div className="flex justify-center w-full h-135 mb-50">
        <div className={"bg-white h-full w-[50%]"}>
          <img src={img} className="w-full h-full" />
        </div>
        <div className={"bg-black h-full w-[50%] text-white"}>
          <span className="text-7xl font-semibold relative top-15 left-10">
            {title}
          </span>
          <p className="relative top-45 ml-10 w-150">{children}</p>
          <p className="mt-65 ml-10 font-medium">Tecnologias:</p>
          {tech}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center w-full h-135">
      <div className={"bg-black h-full w-[50%]"}>
        {title && (
          <span className="text-7xl text-white font-semibold relative left-10 top-15">
            {title}
          </span>
        )}
        <p className="relative text-white top-45 ml-10 w-150">{children}</p>
        <p className="mt-75 ml-10 text-white font-medium">Tecnologias:</p>
        {tech}
      </div>
      <div className={"bg-white h-full w-[50%] text-white"}>
        <img src={img} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SkillCard;
