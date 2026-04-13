import Banner from "../../../components/Home/Banner";
import Contact from "../../../components/Home/Contact";
import NetworkActivity from "../../../components/Home/NetworkActivity";
import Projects from "../../../components/Home/Projects";
import SkillSection from "../../../components/Home/SkillSection";
import SystemManifest from "../../../components/Home/SystemManifest";

const HomePage = () => {
  return (
    <main className="bg-prism-background">
      <Banner />
      <SkillSection />
      <Projects />
      <NetworkActivity />
      <SystemManifest />
      <Contact />
    </main>
  );
};

export default HomePage;
