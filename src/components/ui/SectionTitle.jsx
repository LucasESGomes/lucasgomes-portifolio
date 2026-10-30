const SectionTitle = ({ number, title, children }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="flex items-baseline text-3xl md:text-4xl lg:text-5xl font-normal text-black">
        <span className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 mr-4 md:mr-6">
          {number}
        </span>
        {title}
        <span className="text-2xl">.</span>
      </h2>
      {children}
    </div>
  );
};

export default SectionTitle;
