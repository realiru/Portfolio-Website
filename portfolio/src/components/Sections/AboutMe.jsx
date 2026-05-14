import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p className="about-subtitle">Who I am and what I do</p>

      <div className="about-content">
        {/* image placeholder - need to add actual photo later */}
        <div className="about-img-placeholder">Photo</div>

        <div className="about-text">
          <p>
            Hi, My name is Hamzah! I'm a Software Engineer with a degree in
            Computer Science from the University of Auckland, passionate about
            creating secure, scalable, and user-focused solutions.
          </p>
          <p>
            I've worked on projects spanning full-stack development, cloud
            technologies, and cybersecurity, including a UV exposure tracking app
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
