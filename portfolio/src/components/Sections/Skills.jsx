import './Skills.css';

// TODO: make this a proper grid layout, this list looks bad
function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <p className="skills-subtitle">What I work with</p>

      <div className="skills-list">
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML / CSS</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React JS</li>
            <li>React Native</li>
            <li>.NET Core</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <ul>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
