const Social = ({
    children, 
    icon: Icon, 
    border = "border-3 border-gray-300",
    link = "#",
    size = 20,
    className = ""
}) => {

    return(
        <a 
          href={link}
          target="_blank"
            className={
                `flex justify-center items-center rounded-full h-17 w-17 ${border} 
                transform transition-all duration-300 hover:border-gray-600 hover:-translate-y-3 ${className}`}>
                {Icon && <Icon size={size} className="text-gray-800" />}
                {children}
        </a>
    );
}

export default Social;