import Section from "../layout/Section.jsx";
import SkillCard from "../ui/SkillCard.jsx";
import TechItem from "../ui/TechItem.jsx";

//Media
import React from "../../../public/img/icon/react.png";
import Tailwind from "../../../public/img/icon/tailwind.png";
import Vite from "../../../public/img/icon/vite.png";
import Git from "../../../public/img/icon/git.png";
import Figma from "../../../public/img/icon/figma.png";
import Vercel from "../../../public/img/icon/vercel.png";

import Frontend from "../../../public/img/frontend.png";

const SkillSection = () => {
  return (
    <section id="skill-section">
      <Section>
        <SkillCard
          version="left"
          img={Frontend}
          title={"FRONT-END"}
          children={
            "A minha especialidade atualmente é pro ramo de Front-end, aonde eu desenvolvi algumas habilidades incluindo o aprendizado de frameworks modernos, além de ficar responsável pelo desenvolvimento do Front-end do TCC"
          }
          tech={
            <div className="flex ml-10 gap-1 mt-3">
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
          children={
            "Em algumas projeto pessoais e academicos eu desenvolvi parte do Backe-end, como a comunicação com API`S e até autenticação de usuários"
          }
          tech={
            <div className="flex ml-10 gap-1 mt-3">
              <TechItem img={React} children={"Node"} />
              <TechItem img={Tailwind} children={"Express"} />
              <TechItem img={Vite} children={"MySQL"} />
              <TechItem img={Git} children={"MongDB"} />
              <TechItem img={Figma} children={"Render"} />
            </div>
          }
        />
      </Section>
    </section>
  );
};

export default SkillSection;
