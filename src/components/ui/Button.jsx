const Button = ({ children, onClick, type = "default", }) => {
    if (type === "default") {
        return (
            <button
                onClick={onClick}
                className="px-4 py-2 w-full h-full rounded-xl font-semibold text-white
                transition bg-black active:scale-100"
            >

            </button>
        );
    }

    return (
        <>

        </>
    );
}

export default Button;