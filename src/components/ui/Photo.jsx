const Photo = ({ src, alt }) => {
  return (
    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 lg:short:w-52 lg:short:h-52 rounded-full overflow-hidden bg-gray-200">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default Photo;
