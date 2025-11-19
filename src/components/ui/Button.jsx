const Button = ({ children, onClick, IconComponent, type = "default" }) => {
  if (type === "animated") {
    return (
      <button
        onClick={onClick}
        className="relative inline-flex items-center justify-center w-full max-w-xs h-17 px-6 py-4 overflow-hidden font-semibold text-black bg-white border-2 border-black rounded-xl group transition-all duration-300 ease-out hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        {/* Background preto que desliza */}
        <div className="absolute left-0 top-0 h-full w-17 bg-black rounded-xl transition-all duration-600 ease-out group-hover:w-full flex items-center justify-center">
          <div className="transition-all duration-300 ease-out transform group-hover:scale-110">
            {IconComponent}
          </div>
        </div>

        {/* Texto */}
        <span className="relative ml-7 z-10 transition-all duration-300 ease-out group-hover:text-transparent">
          {children}
        </span>
      </button>
    );
  }

  if (type === "service") {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 w-50 h-10 rounded-full font-semibold text-black
                transition bg-black active:scale-100"
      >
        {children}
      </button>
    );
  }

  //Default button
  return (
    <button
      onClick={onClick}
      className="inline-flex text-center items-center gap-3 px-4 py-6.5 h-10 w-full rounded-full font-semibold text-white
                transition-all bg-black active:scale-100 hover:scale-x-105 focus:border-stone-50"
    >
      {children}
    </button>
  );
};

export default Button;
