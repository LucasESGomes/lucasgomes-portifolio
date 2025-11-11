//Components
import Logo from "../ui/Logo.jsx";


const Header = () => {
    const nav = ["Inicio", "Habilidades", "Projetos", "Serviços", "Contato"];

    return (
        <>
            <header className="flex w-full bg-transparent items-center h-16 justify-betweem p-4 text-black sticky top-0 z-10">
                {/* Nav Mobile */}

                <Logo />

                {/* Nav Desktop */}
                <nav className="md:flex hidden">
                    <ul className="flex gap-5">
                        {nav.map((item) => (
                            <li
                                className="hover:scale-105 transition-all ease-in cursor-pointer duration-300"
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className="md:flex hidden">
                    <button></button>
                </div>


            </header>
        </>
    )
}

export default Header;