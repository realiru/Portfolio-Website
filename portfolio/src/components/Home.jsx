import HeroSection from './Sections/HeroSection.jsx';
import AboutMe from './Sections/AboutMe.jsx';
import Skills from './Sections/Skills.jsx';
import Projects from './Sections/Project.jsx';
import WorkExperience from './Sections/WorkExperience.jsx';
import Footer from './Sections/Footer.jsx';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
