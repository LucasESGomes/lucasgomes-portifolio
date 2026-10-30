import { useLenis } from "./hooks/useLenis.js";

//Components
import Background from "./components/layout/Background.jsx";
import Header from "./components/layout/Header.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import SkillSection from "./components/sections/SkillSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import TimelineSection from "./components/sections/TimelineSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";

function App() {
  useLenis();

  return (
    <div className="relative font-sans overflow-x-clip">
      <Background />
      <Header />
      <HeroSection />

      {/* Keeps the fixed hero visible for one screen before the cards slide over it */}
      <div className="hidden lg:block h-screen w-full" />

      <div className="relative z-20">
        <SkillSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
