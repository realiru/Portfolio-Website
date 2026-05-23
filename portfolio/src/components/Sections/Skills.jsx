import './Skills.css';

const skillData = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML / CSS'],
  },
  {
    category: 'Frameworks',
    items: ['React JS', 'React Native', '.NET Core', 'Tailwind CSS'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS Lightsail', 'Linux', 'SSH', 'DNS', 'Raspberry Pi', 'Network Security'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQL'],
  },
  {
    category: 'Tools',
    items: ['GitHub / Git', 'VS Code', 'Figma', 'CI/CD', 'Zapier', 'Microsoft 365'],
  },
];

function Skills() {
  return (
    <div className="skills-container section" id="skills">
      <h2>Skills</h2>
      <p className="skills-subtitle">What I work with</p>

      <div className="skills-grid">
        {skillData.map((group) => (
          <div key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <span className="skill-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
