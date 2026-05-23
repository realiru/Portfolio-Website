import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import './HeroSection.css';

function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'an IT Support Professional',
        'a CS Graduate',
        'a Problem Solver',
        'a Cyber Security Enthusiast',
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
    <div className="hero-container section" id="hero">
      <p className="hero-pre">
        I'm <span ref={typedRef}></span>
      </p>
      <h1>
        Hamzah Patel<span className="hero-cursor">_</span>
      </h1>
      <p className="hero-degree">Computer Science @ University of Auckland '24</p>

      <div className="hero-social">
        <a href="mailto:hamzahpatel403@gmail.com" aria-label="Email">
          <MdEmail />
        </a>
        <a href="https://github.com/realiru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/hamzahpatel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

      <a href="/Hamzah CV.pdf" download className="hero-resume-btn">
        <FaDownload />
        Resume
      </a>
    </div>
  );
}

export default HeroSection;
