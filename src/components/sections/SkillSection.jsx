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
          children={"A minha especialidade atualmente "}
          tech={
            <div className="flex ml-10 gap-1 mt-90">
              <TechItem img={React} children={"React"} />
              <TechItem img={Tailwind} children={"Tailwind"} />
              <TechItem img={Vite} children={"Vite"} />
              <TechItem img={Git} children={"Git"} />
              <TechItem img={Figma} children={"Figma"} />
              <TechItem img={Vercel} children={"Vercel"} />
            </div>
          }
        />
        <SkillCard />
      </Section>
    </section>
  );
};

export default SkillSection;
