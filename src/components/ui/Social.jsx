const Social = ({
    children, 
    icon: Icon, 
    size = "p-8", 
    border = "border-2 border-gray-300",
    link = String
}) => {

    return(
        <div className={`flex justify-center items-center rounded-full ${size} ${border}`} onClick={link}>
            {Icon && <icon size={12} />}
            {children}
        </div>
    );
}

export default Social;