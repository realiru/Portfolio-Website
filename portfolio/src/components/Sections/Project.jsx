import './Project.css';

const projects = [
  {
    id: 1,
    emoji: '☀️',
    title: 'UV Exposure Tracker',
    description:
      'Capstone project: A React Native Android app to monitor sun exposure. Implemented custom JWT authentication after discovering the original Expo library was deprecated. Nominated for Largest Community Impact Award.',
    tags: ['React Native', 'JWT', 'TypeScript'],
    github: 'https://github.com/realiru',
    live: null,
  },
  {
    id: 2,
    emoji: '📋',
    title: 'Form Data Automation',
    description:
      "Freelance: Rebuilt a client's Squarespace form in HTML/CSS, added JavaScript validation and regex checks, and integrated Zapier webhooks to automate secure data transfer into Google Drive and Sheets.",
    tags: ['JavaScript', 'Zapier', 'HTML/CSS'],
    github: null,
    live: null,
  },
  {
    id: 3,
    emoji: '🍓',
    title: 'Network-wide DNS Filter',
    description:
      'Deployed Pi-hole on a Raspberry Pi 3B for network-wide ad and DNS filtering. Configured via SSH and Linux CLI. Gained hands-on experience with networking and system administration.',
    tags: ['Linux', 'Raspberry Pi', 'Networking'],
    github: 'https://github.com/realiru',
    live: null,
  },
  {
    id: 4,
    emoji: '💍',
    title: 'Divaria',
    description:
      'Freelance: Custom landing page built from scratch for a NZ vintage and antique jewellery business. No templates or CMS. Designed and developed the full site to drive traffic to their Trade Me storefront. Self-hosted on AWS Lightsail, handling domain configuration, server provisioning, and deployment end to end.',
    tags: ['React', 'JavaScript', 'CSS', 'AWS Lightsail'],
    github: 'https://github.com/realiru/Divaria',
    live: 'https://divaria.co.nz',
  },
];

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <p className="projects-subtitle">Check out my work</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-thumb">
              <span className="project-emoji">{project.emoji}</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
