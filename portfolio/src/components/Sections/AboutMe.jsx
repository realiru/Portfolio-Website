import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <p className="section-label">Who I am</p>
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="about-photo-wrapper">
          <div className="about-photo-placeholder">HP</div>
        </div>

        <div className="about-text">
          <p>
            Hi, my name is Hamzah! I'm a Software Engineer with a degree in
            Computer Science from the University of Auckland, passionate about
            creating secure, scalable, and user-focused solutions.
          </p>
          <p>
            I've worked on projects spanning full-stack development, cloud
            technologies, and cybersecurity - including a UV exposure tracking
            app
            nominated for the Largest Community Impact Award.
          </p>
          <p>
            Proficient in Python, Java, JavaScript, ReactJS, SQL, and Agile
            practices. I enjoy solving complex problems, optimising systems, and
            automating workflows for real-world impact.
          </p>
          <p>
            Outside of coding, I'm curious by nature, always exploring new tools
            and technologies, and I enjoy bouldering, motorbikes, and continuous
            learning.
          </p>

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
