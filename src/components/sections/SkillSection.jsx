import { useRef } from "react";
import { useScroll } from "motion/react";

import { skills } from "../../data/skills.js";
import SkillCard from "../ui/SkillCard.jsx";

const SkillSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="habilidades" ref={container} className="relative w-full lg:-mb-40">
      {skills.map((skill, i) => (
        <SkillCard
          key={skill.title}
          i={i}
          {...skill}
          progress={scrollYProgress}
          totalCards={skills.length}
        />
      ))}
    </section>
  );
};

export default SkillSection;
