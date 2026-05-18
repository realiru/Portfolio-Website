import { useState } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-container" id="about">
      <p className="section-label">Who I am</p>
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="about-photo-wrapper">
          <img
            src="/images/profile.png"
            alt="Hamzah Patel"
            className="about-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="about-photo-placeholder" style={{ display: 'none' }}>HP</div>
        </div>

        <div className="about-text">
          <p>
            Hi, my name is Hamzah! I'm a Software Engineer with a degree in
            Computer Science from the University of Auckland, passionate about
            creating secure, scalable, and user-focused solutions.
          </p>
          <p>
            I've worked on projects spanning full-stack development, cloud
            technologies, and cybersecurity, including a UV exposure tracking
            app nominated for the Largest Community Impact Award.
          </p>

          <div className={`about-extra ${expanded ? 'about-extra--open' : ''}`}>
            <p>
              Proficient in Python, Java, JavaScript, ReactJS, SQL, and Agile
              practices. I enjoy solving complex problems, optimising systems, and
              automating workflows for real-world impact.
            </p>
            <p>
              Outside of coding, I'm curious by nature always exploring new
              tools and technologies. I enjoy bouldering, motorbikes, and
              continuous learning.
            </p>
          </div>

          <button
            className="about-read-more"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less ↑' : 'Read more ↓'}
          </button>

          <div className="about-facts">
            <div className="about-fact">
              <strong>Location</strong>
              <span>Auckland, New Zealand</span>
            </div>
            <div className="about-fact">
              <strong>Degree</strong>
              <span>BSc Computer Science, UoA '24</span>
            </div>
            <div className="about-fact">
              <strong>Email</strong>
              <span>hamzahpatel403@gmail.com</span>
            </div>
            <div className="about-fact">
              <strong>Currently</strong>
              <span>Customer Advisor @ Spark NZ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
