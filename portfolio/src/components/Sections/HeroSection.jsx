import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Button from "../Button.jsx";
import "../../App.css";

function HeroSection() {
  const subTextElement = useRef(null);

  useEffect(() => {
    const subTextOptions = {
      strings: [
        "a Full Stack Developer",
        "a Computer Enthusiast",
        "a Problem Solver",
        "a Cyber Security Consultant",
        "a Fast Learner",
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
    <div className="relative !-mt-20 flex h-[calc(100vh+5rem)] w-full flex-col items-center justify-center bg-[url('/images/img-home.jpg')] bg-cover bg-center bg-no-repeat pt-20 text-center text-white shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.2)]">
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}

      <h1 className="text-[3rem] leading-tight font-bold drop-shadow-lg sm:text-[4rem] md:text-[3.125rem] lg:text-[4.375rem]">
        Welcome to my website
      </h1>

      <p className="mt-2 text-[2rem] font-normal md:text-[1.875rem] lg:text-[1.5rem]">
        I am <span ref={subTextElement} className="font-semibold text-[#f4efca]"></span>
      </p>

      <div>
        <Button>
          View My Work
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
