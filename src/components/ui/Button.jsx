const Button = ({ children, onClick, type = "default" }) => {
  if (type === "animated") {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 w-60 h-10 rounded-xl font-semibold text-white
                transition bg-black active:scale-100"
      >
        {children}
      </button>
    );
  }

  if (type === "service") {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 w-50 h-10 rounded-full font-semibold text-white
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
