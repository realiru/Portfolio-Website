import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.navbar-container')) setClick(false);
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // dog eye tracking
  useEffect(() => {
    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');
    const faceGroup = document.getElementById('face-group');
    const nose = document.getElementById('nose');

    const handleMouseMove = (e) => {
      const svg = document.querySelector('nav svg');
      if (!svg || !leftEye || !rightEye) return;
      const rect = svg.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);

      const moveEye = (eye, ox, oy) => {
        eye.setAttribute('cx', ox + Math.cos(angle) * 2);
        eye.setAttribute('cy', oy + Math.sin(angle) * 4);
      };

      moveEye(leftEye, 65.22, 34.75);
      moveEye(rightEye, 33.28, 34.75);

      if (window.innerWidth > 960) {
        const tx = Math.max(-2, Math.min(2, (e.clientX - cx) / 250));
        const ty = Math.max(-2, Math.min(0, (e.clientY - cy) / 250));
        const rot = Math.max(-3, Math.min(0, Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) / 10));
        const nx = nose.getAttribute('cx');
        const ny = nose.getAttribute('cy');
        faceGroup.setAttribute('transform', `translate(${tx}, ${ty}) rotate(${rot}, ${nx}, ${ny})`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" className="navbar-logo-img">
            <path d="M49 61.46H21.48v33.42h27.49" style={{ fill: '#b36b3b' }} />
            <path d="M48.97 94.88h27.51V61.46H49" style={{ fill: '#95552f' }} />
            <g id="face-group">
              <path d="M17.18 23.91c-6.9 0-12.5 5.6-12.5 12.5s5.6 12.5 12.5 12.5" style={{ fill: '#a25f32' }} />
              <path d="M80.77 48.91c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5" style={{ fill: '#5a3316' }} />
              <path d="M48.98 74.53c-14.88.37-28.91-9.45-32.26-17.05-.17-.38-.24-.79-.24-1.21V28.33c0-10.93 8.86-19.79 19.79-19.79h12.71" style={{ fill: '#c98254' }} />
              <path d="M48.98 8.55h12.71c10.93 0 19.79 8.86 19.79 19.79v27.67c0 .59-.15 1.17-.47 1.66-5.21 8.04-18.91 16.54-32.03 16.87" style={{ fill: '#b46a39' }} />
              <path d="M25 25.12h16.88v18.53H26.47c-5.52 0-10-4.48-10-10 0-4.71 3.82-8.53 8.53-8.53Z" style={{ fill: '#9b5623', opacity: 0.5 }} transform="rotate(-180 29.18 34.38)" />
              <path d="M65.32 25.12H81.2c.15 0 .26.12.26.26v18c0 .15-.12.26-.26.26H65.32c-5.11 0-9.26-4.15-9.26-9.26 0-5.11 4.15-9.26 9.26-9.26Z" style={{ opacity: 0.5, fill: '#602c06' }} />
              <circle id="left-eye" cx="65.22" cy="34.75" r="3.5" style={{ fill: '#3c1300' }} />
              <circle id="right-eye" cx="33.28" cy="34.75" r="3.5" style={{ fill: '#3c1400' }} />
              <circle id="nose" cx="48.97" cy="57.44" r="5.83" style={{ fill: '#401900' }} />
            </g>
          </svg>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link></li>
          <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>About</Link></li>
          <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>Skills</Link></li>
          <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>Projects</Link></li>
        </ul>

        <a href="mailto:hamzahpatel403@gmail.com" className="nav-contact-btn">
          Contact Me <i className="fa fa-user" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
