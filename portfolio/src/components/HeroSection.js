import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';

function HeroSection() {
  const subTextElement = useRef(null);

  useEffect(() => {
    const subTextOptions = {
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
    };

    const subTyped = new Typed(subTextElement.current, subTextOptions);

    return () => {
      subTyped.destroy();
    };
  }, []);

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Welcome to my website</h1>
      <p>
        I am <span ref={subTextElement}></span>
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          View My Work
        </Button>
        </div>
    </div>
  );
}

export default HeroSection;