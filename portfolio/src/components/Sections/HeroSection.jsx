import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './HeroSection.css';

function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'a Full Stack Developer',
        'a Computer Enthusiast',
        'a Problem Solver',
        'a Cyber Security Consultant',
        'a Fast Learner',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="hero-container">
      <p className="hero-pre">
        I'm <span ref={typedRef}></span>
      </p>
      <h1>
        Hamzah Patel<span className="hero-cursor">_</span>
      </h1>
      <p className="hero-degree">Computer Science @ University of Auckland '24</p>

      <div className="hero-social">
        <a href="mailto:hamzahpatel403@gmail.com" aria-label="Email">
          <i className="fa fa-envelope" />
        </a>
        <a href="https://github.com/realiru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github" />
        </a>
        <a href="https://linkedin.com/in/hamzahpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>

      <a href="/resume.pdf" download className="hero-resume-btn">
        <i className="fa fa-download" /> Resume
      </a>
    </div>
  );
}

export default HeroSection;
