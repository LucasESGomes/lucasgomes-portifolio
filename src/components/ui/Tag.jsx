// `icon` is an image path from /public, `Icon` a react-icons component
const Tag = ({ icon, Icon, children }) => {
  return (
    <span className="inline-flex items-center gap-2 bg-zinc-800 px-3 py-2 lg:px-5 lg:py-3 text-white text-xs lg:text-sm font-medium">
      {icon && <img src={icon} alt="" className="w-3.5 h-3.5 lg:w-4 lg:h-4 object-contain" />}
      {Icon && <Icon aria-hidden className="w-3.5 h-3.5 lg:w-4 lg:h-4" />}
      {children}
    </span>
  );
};

export default Tag;
