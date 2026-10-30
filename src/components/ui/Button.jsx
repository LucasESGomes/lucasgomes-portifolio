const variants = {
  primary: "px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800",
  filter: "px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200",
  filterActive: "px-4 py-2 text-sm font-medium bg-black text-white",
};

// Renders an <a> when href is given, otherwise a <button>
const Button = ({ variant = "primary", href, className = "", children, ...props }) => {
  const classes = `inline-flex items-center justify-center gap-2 cursor-pointer transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
