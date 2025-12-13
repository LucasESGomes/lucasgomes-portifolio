//Components
import Background from "./components/layout/Background.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from "./components/sections/HeroSection.jsx"
import SkillSection from "./components/sections/SkillSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import ServicesSection from "./components/sections/ServicesSection.jsx";

function App() {

  return (
    <>
      <Background />
      <Header />
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default App;