//Components
import Background from "./components/layout/Background.jsx";
import Header from "./components/layout/Header.jsx";
import HeroSection from "./components/sections/HeroSection.jsx"
import SkillSection from "./components/sections/SkillSection.jsx";

function App() {

  return (
    <div className="relative">
      
      <Background />
      <Header />
      <HeroSection />
      <SkillSection />
    </div>
  );
}

export default App;