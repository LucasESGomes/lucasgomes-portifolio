import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FiGithub, FiLinkedin, FiInstagram, FiCopy, FiCheck } from "react-icons/fi";

import { profile } from "../../data/profile.js";
import Photo from "../ui/Photo.jsx";
import Social from "../ui/Social.jsx";
import Button from "../ui/Button.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  // Desktop only: the fixed hero fades and lifts while the skill cards scroll over it,
  // keeping the grid visible. On mobile the hero is in normal flow and just scrolls away.
  const { scrollY } = useScroll();
  const heroProgress = (value) =>
    window.innerWidth < 1024 ? 0 : Math.min(value / window.innerHeight, 1);
  const opacity = useTransform(scrollY, (value) => 1 - heroProgress(value));
  const y = useTransform(scrollY, (value) => -heroProgress(value) * 80);
  const visibility = useTransform(opacity, (value) => (value <= 0.01 ? "hidden" : "visible"));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <motion.div
      id="inicio"
      style={{ opacity, y, visibility }}
      className="relative lg:fixed lg:inset-0 flex justify-center items-center pointer-events-none z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <main className="px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8 lg:pt-36 lg:short:pt-28 lg:pb-8 lg:short:pb-4 pointer-events-auto mt-12 sm:mt-10 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-24 xl:gap-70 items-start">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl lg:short:text-8xl font-bold text-black leading-none tracking-tight">
                  {profile.firstName}
                </h1>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl lg:short:text-8xl font-bold text-black leading-none tracking-tight">
                  {profile.lastName}
                </h1>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-sm sm:text-base md:text-lg text-gray-700">{profile.role}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  title={copied ? "E-mail copiado!" : "Copiar e-mail"}
                  aria-label="Copiar e-mail"
                  className="flex items-center gap-1 p-1 hover:bg-gray-100 rounded transition-colors duration-200 cursor-pointer"
                >
                  {copied ? (
                    <FiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                  ) : (
                    <FiCopy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                  )}
                  {copied && <span className="text-xs text-gray-500">copiado</span>}
                </button>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                <Social icon={FiGithub} link={profile.socials.github} label="GitHub" />
                <Social icon={FiLinkedin} link={profile.socials.linkedin} label="LinkedIn" />
                <Social icon={FiInstagram} link={profile.socials.instagram} label="Instagram" />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-10 lg:short:space-y-6">
              <div className="flex justify-center lg:justify-end">
                <Photo src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} />
              </div>

              <div className="text-center sm:text-right lg:text-left xl:text-right">
                <p className="text-sm sm:text-base lg:text-lg lg:short:text-base text-gray-800 leading-relaxed max-w-sm mx-auto sm:mr-0 lg:mx-0 xl:ml-auto">
                  {profile.bio}
                </p>
                <div className="mt-4 sm:mt-6">
                  <Button
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2"
                  >
                    Currículo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 lg:short:mt-8">
            <SectionTitle number="02" title="Habilidades" />
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default HeroSection;
