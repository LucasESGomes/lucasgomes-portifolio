import Section from "../layout/Section.jsx";
import SkillCard from "../ui/SkillCard.jsx";
import TechItem from "../ui/TechItem.jsx";

//Media
import React from "/img/icon/react.png";
import Tailwind from "/img/icon/tailwind.png";
import Vite from "/img/icon/vite.png";
import Git from "/img/icon/git.png";
import Figma from "/img/icon/figma.png";
import Vercel from "/img/icon/vercel.png";
import Node from "/img/icon/node.webp";
import Python from "/img/icon/python.png";
import Express from "/img/icon/express.webp";
import MySQL from "/img/icon/mySql.png";
import MongoDB from "/img/icon/mongoDb.png";


import Frontend from "../../../public/img/frontend.png";
import Backend from "../../../public/img/backend.png";

const SkillSection = () => {
  return (
    <section>
      <Section id={"skill-section"}>
        <SkillCard
          version="left"
          img={Frontend}
          title={"FRONT-END"}
          children={
            "A minha especialidade atualmente é pro ramo de Front-end, aonde eu desenvolvi algumas habilidades incluindo o aprendizado de frameworks modernos, além de ficar responsável pelo desenvolvimento do Front-end do TCC"
          }
          tech={
            <div className="flex ml-10 gap-1 mt-3 w-150">
              <TechItem img={React} children={"React"} />
              <TechItem img={Tailwind} children={"Tailwind"} />
              <TechItem img={Vite} children={"Vite"} />
              <TechItem img={Git} children={"Git"} />
              <TechItem img={Figma} children={"Figma"} />
              <TechItem img={Vercel} children={"Vercel"} />
            </div>
          }
        />
        <SkillCard
          version="right"
          title={"BACK-END"}
          img={Backend}
          children={
            "Em algumas projeto pessoais e academicos eu desenvolvi parte do Backe-end, como a comunicação com API`S e até autenticação de usuários"
          }
          tech={
            <div className="flex ml-10 gap-1 mt-3 w-150">
              <TechItem img={Node} children={"Node"} />
              <TechItem img={Python} children={"Python"} />
              <TechItem img={Express} children={"Express"} />
              <TechItem img={MySQL} children={"MySql"} />
              <TechItem img={MongoDB} children={"Mongo"} />
              <TechItem children={"Render"} />
            </div>
          }
        />
      </Section>
    </section>
  );
};

export default SkillSection;
