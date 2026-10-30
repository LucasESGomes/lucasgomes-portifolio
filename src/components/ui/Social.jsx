const Social = ({ icon: Icon, link, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative p-2 sm:p-2.5 md:p-3 border border-gray-200 rounded-full hover:border-gray-800 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1 bg-white"
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
      <div className="absolute inset-0 rounded-full bg-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </a>
  );
};

export default Social;
