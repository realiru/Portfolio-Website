import HeroSection from './Sections/HeroSection.jsx';
import AboutMe from './Sections/AboutMe.jsx';
import Skills from './Sections/Skills.jsx';
import Projects from './Sections/Projects.jsx';
import WorkExperience from './Sections/WorkExperience.jsx';

// footer still todo
function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <Projects />
    </>
  );
}

export default Home;
