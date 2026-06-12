import { useState } from 'react';
import './AboutMe.css';

function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-container section" id="about">
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
          {/* always visible */}
          <p>
            Hi, I'm Hamzah. CS grad from the University of Auckland, currently
            working in technical support at Spark NZ and looking to move into a
            dedicated IT support or cyber security role.
          </p>
          <p>
            I've built and shipped real projects: A network-wide DNS filtering
            system on Linux, a client website self-hosted on AWS Lightsail, a
            mobile app with custom JWT authentication, and an automated data
            pipeline for a freelance client.
          </p>

          {/* hidden on mobile until expanded */}
          <div className={`about-extra ${expanded ? 'about-extra--open' : ''}`}>
            <p>
              I'm currently studying toward CompTIA A+ (220-1101) and genuinely
              enjoy the problem-solving side of tech. Outside of work I boulder,
              ride motorbikes, and travel whenever I can.
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
              <span>IT Support · Open to Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
