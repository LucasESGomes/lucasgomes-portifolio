import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import { contact } from "../../data/contact.js";
import { profile } from "../../data/profile.js";

const ease = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: { y: "45%", opacity: 0, filter: "blur(10px)" },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease, delay: i * 0.07 },
  }),
  exit: (i) => ({
    y: "-35%",
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.5, ease, delay: i * 0.04 },
  }),
};

// Splits a phrase into words that rise in one after another
const Words = ({ text }) =>
  text.split(" ").map((word, i) => (
    <motion.span
      key={`${word}-${i}`}
      custom={i}
      variants={wordVariants}
      className="inline-block mr-[0.25em] will-change-transform"
    >
      {word}
    </motion.span>
  ));

const ContactSection = () => {
  const section = useRef(null);
  const revealed = useInView(section, { once: true, amount: 0.35 });
  const inView = useInView(section, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Panel grows to full width and loses its rounded corners as it scrolls in
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 0]);

  // Gradient follows the pointer a little, eased by a spring
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 40, damping: 20 });
  const glowY = useSpring(pointerY, { stiffness: 40, damping: 20 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 60);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 60);
  };

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const interval = setInterval(
      () => setPhraseIndex((index) => (index + 1) % contact.phrases.length),
      3200
    );
    return () => clearInterval(interval);
  }, [inView, reduceMotion]);

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(contact.subject)}`;

  return (
    <section id="contato" ref={section} className="relative mt-24 lg:mt-40">
      <motion.div
        style={{ scale, borderRadius }}
        onPointerMove={handlePointerMove}
        className="relative overflow-hidden bg-[#111118] text-white origin-bottom"
      >
        {/* Gradient + grain backdrop */}
        <motion.div aria-hidden style={{ x: glowX, y: glowY }} className="absolute -inset-16">
          <div className="cta-blob cta-blob-violet" />
          <div className="cta-blob cta-blob-pink" />
          <div className="cta-blob cta-blob-indigo" />
        </motion.div>
        <div aria-hidden className="grain absolute inset-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 max-w-7xl mx-auto min-h-[100svh] px-6 md:px-10 py-10 md:py-12 flex flex-col justify-between gap-16"
        >
          {/* Top row */}
          <motion.div variants={wordVariants} custom={0} className="flex items-start justify-between gap-6">
            <div className="leading-tight">
              <span className="block font-serif italic text-lg md:text-2xl text-white/80">{profile.firstName}</span>
              <span className="block text-xl md:text-3xl">{profile.lastName}</span>
            </div>
            <nav className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6 md:gap-10 text-sm md:text-lg uppercase">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                LinkedIn
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                Instagram
              </a>
            </nav>
          </motion.div>

          {/* Headline */}
          <h2 className="uppercase font-normal tracking-tight leading-[0.92] text-[clamp(2.6rem,8.5vw,8rem)]">
            <span className="block">
              <Words text={contact.lead} />
            </span>
            <span className="block min-h-[2.8em] md:min-h-[1.9em]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial="hidden"
                  animate={revealed ? "visible" : "hidden"}
                  exit="exit"
                  className="block text-white/90"
                >
                  <Words text={contact.phrases[phraseIndex]} />
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.p
              variants={wordVariants}
              custom={2}
              className="max-w-md uppercase text-sm md:text-lg leading-snug text-white/85"
            >
              {contact.message}
            </motion.p>

            <motion.a
              variants={wordVariants}
              custom={3}
              href={mailto}
              className="group relative self-start md:self-auto inline-flex items-center gap-3 overflow-hidden border-2 border-white px-6 py-4 text-base md:text-xl uppercase"
            >
              <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" />
              <span className="relative transition-colors duration-500 group-hover:text-black">{contact.button}</span>
              <FiArrowUpRight className="relative w-5 h-5 transition-all duration-500 group-hover:text-black group-hover:rotate-45" />
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 border-t border-white/15 pt-6 text-xs uppercase tracking-wider text-white/50">
            <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
            <span>{contact.location}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
