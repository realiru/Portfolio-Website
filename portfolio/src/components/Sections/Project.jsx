import './Project.css';

// TODO replace with actual project data!!
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    image: '/images/img-9.jpg',
  },
  {
    id: 2,
    title: 'Project Name',
    description: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    image: '/images/img-2.jpg',
  },
  {
    id: 3,
    title: 'Project Name',
    description: 'Some description here',
    label: 'Label',
    image: '/images/img-1.jpg',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p className="projects-subtitle">Check out my work</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-thumb">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <span className="project-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href="#">GitHub</a>
                <a href="#">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
