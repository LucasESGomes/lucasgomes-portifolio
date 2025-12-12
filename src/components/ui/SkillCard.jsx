const SkillCard = ({ img, title, children, tech, version = "right" }) => {
  if (version === "left") {
    return (
      <div className="flex justify-center w-full h-135 border-1 border-gray-300">
        <div className={"bg-white h-full w-[50%]"}>
          <img src={img} className="w-full h-full" />
        </div>
        <div className={"bg-black h-full w-[50%] text-white"}>
          <span className="text-7xl font-semibold relative top-15 left-10">
            {title}
          </span>
          <span className="py-30 ">{children}</span>
          {tech}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center w-full h-135 border-1 border-gray-300">
      <div className={"bg-black h-full w-[50%]"}>
        {title && (
          <span className="text-7xl font-semibold relative top-15 right-10">
            {title}
          </span>
        )}
        {children}
        {tech}
      </div>
      <div className={"bg-white h-full w-[50%] text-white"}>
        <img src={img} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SkillCard;