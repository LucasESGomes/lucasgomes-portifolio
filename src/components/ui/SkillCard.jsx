import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import ImageWithFallback from "./ImageWithFallback.jsx";
import Tag from "./Tag.jsx";

const SkillCard = ({ i, title, description, src, tags, progress, totalCards }) => {
  const container = useRef(null);

  // Image zooms from 2x to 1x while the card scrolls into place
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // Cards start pushed down 50px per index and settle as the stack scrolls
  const stackProgress = useTransform(progress, [i / (totalCards + 1), 1], [0, 1]);
  const translateY = useTransform(stackProgress, [0, 1], [50 * i, 0]);

  const imageFirst = i % 2 === 0;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 w-full px-5 box-border"
    >
      <motion.div
        style={{ translateY, zIndex: 100 - i }}
        className="flex flex-col relative lg:-top-[8vh] h-[min(600px,85vh)] lg:h-[min(600px,80vh)] w-[90vw] sm:w-[80vw] max-w-[1600px]"
      >
        <div className="flex h-full w-full lg:flex-row flex-col">
          <div
            className={`lg:w-1/2 w-full lg:h-full h-1/3 ${imageFirst ? "lg:order-1" : "lg:order-2"} order-1 bg-white flex items-center justify-center overflow-hidden`}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center will-change-transform"
              style={{ scale: imageScale }}
            >
              <ImageWithFallback
                src={src}
                alt={title}
                className="w-full h-full object-cover"
                fallback={
                  <span className="px-6 text-center text-4xl lg:text-7xl leading-none font-bold tracking-wider text-transparent [-webkit-text-stroke:1px_black]">
                    {title}
                  </span>
                }
              />
            </motion.div>
          </div>

          <div
            className={`lg:w-1/2 w-full lg:h-full h-2/3 flex flex-col justify-center lg:p-10 p-6 ${imageFirst ? "lg:order-2" : "lg:order-1"} order-2 bg-black text-white`}
          >
            <h3 className="lg:text-7xl text-3xl sm:text-4xl lg:mb-8 mb-3 sm:mb-4 font-bold tracking-wider">{title}</h3>
            <div className="flex flex-col lg:gap-5 gap-3">
              <p className="lg:text-xl text-sm sm:text-base lg:leading-8 leading-6">{description}</p>
              <div className="flex flex-wrap gap-2 lg:gap-3 lg:mt-8 mt-4">
                {tags.map((tag) => (
                  <Tag key={tag.label} icon={tag.icon} Icon={tag.Icon}>
                    {tag.label}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
