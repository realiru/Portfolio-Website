import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Hi, I'm <span className="hero-name">Hamzah</span></h1>
      <p className="hero-sub">Computer Science Graduate & Full Stack Developer</p>
      <div className="hero-btns">
        <a href="#about" className="btn btn--primary btn--large">View My Work</a>
      </div>
    </div>
  );
}

export default HeroSection;
