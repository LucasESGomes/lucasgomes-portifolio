import Photo from "../ui/Photo.jsx"
import Social from "../../components/ui/Social.jsx"
import Button from "../ui/Button.jsx"

//Icons
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

const HeroSection =  () => {
    return (
      <section className="flex w-full mt-35 justify-around item-center relative">
        {/*Informações de contanto*/}
        <div>
          <h1 className="text-gray-900 mb-7 font-extrabold text-9xl">
            Lucas <br />
            Gomes
          </h1>
          <p className="text-gray-500  font-normal text-xl">
            Web-designer e desenvolvedor Front-end
          </p>
          <div className="flex gap-12 mt-20">
            <Social icon={FiGithub} link="#" size={30} />
            <Social icon={FiLinkedin} link="#" size={32} />
            <Social icon={FaInstagram} link="#" size={34} />
          </div>
        </div>

        {/*Pequeno sobre mim*/}
        <div className="relative w-115 justify-end h-100">
          <div className="flex justify-end h-fit mb-5">
            <Photo height="64" />
          </div>
          <div className="flex justify-end mb-5">
            <p className="w-90 font-normal text-right text-black text-[20px]">
              Olá, sou um desenvolvedor focado em Front-end com aproximadamente
              2 anos de experiência
            </p>
          </div>
          <div className="flex justify-end">
            <Button
              type="animated"
              IconComponent={<MdDownload className="text-white text-xl" />}
              onClick={() => console.log("Download clicked")}
            >
              Baixar o currículo CV
            </Button>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;