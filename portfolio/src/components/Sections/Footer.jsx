import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#1a202c] text-white py-10">
      <div className="flex flex-col items-center justify-center">
        {/* Icons Section */}
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/realiru" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="mailto:hamzahpatel403@gmail.com">
            <FaEnvelope className="text-white text-2xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/hamzahpatel" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-[0.875rem] font-normal">© 2024 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
