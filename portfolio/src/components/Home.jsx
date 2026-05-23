import HeroSection from './Sections/HeroSection.jsx';
import AboutMe from './Sections/AboutMe.jsx';
import Skills from './Sections/Skills.jsx';
import Education from './Sections/Education.jsx';
import WorkExperience from './Sections/WorkExperience.jsx';
import Projects from './Sections/Project.jsx';
import Footer from './Sections/Footer.jsx';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
          } else {
            entry.target.classList.remove('section--visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Education />
      <WorkExperience />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
