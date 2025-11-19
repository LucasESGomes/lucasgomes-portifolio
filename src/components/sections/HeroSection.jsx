import Photo from "../ui/Photo.jsx"
import Social from "../../components/ui/Social.jsx"

//Icons
import { FiGithub } from "react-icons/fi";

const HeroSection =  () => {
    return (
      <section className="flex w-full  justify-around item-center relative">
        {/*Informações de contanto*/}
        <div>
          <h1 className="text-gray-900 mb-7 font-extrabold text-9xl">
            Lucas <br /> 
            Gomes
          </h1>
          <p className="text-gray-400  font-normal text-xl">
             Web-designer e desenvolvedor Front-end
        </p>
        <Social 
            Icon={FiGithub}
            size = "p-12"
        />
        </div>

        {/*Pequeno sobre mim*/}
        <div>
          <Photo height="64" />
        </div>
      </section>
    );
}

export default HeroSection;