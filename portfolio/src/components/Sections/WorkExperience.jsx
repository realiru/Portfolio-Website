import './WorkExperience.css';

const jobs = [
  {
    id: 1,
    date: 'Jul 2025 – Present',
    role: 'Customer Advisor (Senior)',
    company: 'Spark NZ',
    points: [
      'Added responsibility for stock intake, transfers, dispatch, and admin.',
      'Progressing toward shift lead by completing internal qualifications.',
      'Continued providing technical guidance and customer support.',
    ],
  },
  {
    id: 2,
    date: 'Apr 2023 – Nov 2024',
    role: 'Customer Advisor',
    company: 'Spark NZ',
    points: [
      'Provided technical guidance to customers with optimal, tailored solutions.',
      'Translated complex technical concepts into customer-friendly explanations, led to 30% increase in satisfaction.',
      'Shadowed data scientists and engineers, expanding knowledge of analytics and network security.',
    ],
  },
  {
    id: 3,
    date: 'May – Jul 2025',
    role: 'Sales Representative (Contract)',
    company: 'Insight Marketing',
    points: [
      'Exceeded fundraising targets in week two by adapting quickly to new audiences.',
      'Developed persuasion, negotiation, and public speaking skills.',
    ],
  },
  {
    id: 4,
    date: 'Mar 2019 – Apr 2023',
    role: 'Shop Floor Assistant',
    company: 'The Warehouse NZ',
    points: [
      'Delivered high-volume customer service across multiple departments.',
      'Built multitasking and time management skills while balancing study with work.',
    ],
  },
];

function WorkExperience() {
  return (
    <div className="work-container">
      <h2>Experience</h2>
      <p className="work-subtitle">Where I've worked</p>

      <div className="timeline">
        {jobs.map((job) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-dot" />
            <p className="timeline-date">{job.date}</p>
            <p className="timeline-role">{job.role}</p>
            <p className="timeline-company">{job.company}</p>
            <ul className="timeline-desc">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
