import { useEffect, useRef } from 'react';
import './WorkExperience.css';

const jobs = [
  {
    id: 1,
    date: 'Apr 2023 – Present',
    role: 'Customer Advisor',
    company: 'Spark NZ',
    points: [
      'Provided first-line technical support: diagnosing device, connectivity, and service issues in real time.',
      'Translated complex technical concepts into clear explanations for non-technical customers, contributing to a 30% increase in satisfaction scores.',
      'Took on additional responsibility for stock intake, transfers, dispatch, and admin from July 2025.',
      'Progressing toward shift lead through internal qualifications.',
      'Shadowed data scientists and engineers, expanding knowledge of analytics and network security.',
    ],
  },
  {
    id: 2,
    date: '2025',
    role: 'Freelance Web Developer',
    company: 'Whitespace Media · Contract',
    points: [
      'Built and redesigned client websites end to end, from layout and responsive design through to deployment.',
      'Handled form rebuilds with custom validation and workflow automation to reduce manual data handling.',
      'Worked directly with clients to turn requirements into working, maintainable sites.',
    ],
  },
  {
    id: 3,
    date: 'May 2025 – Jul 2025',
    role: 'Sales Representative · Contract',
    company: 'Insight Marketing',
    points: [
      'Exceeded fundraising targets in week two by adapting quickly to new audiences.',
      'Developed persuasion, negotiation, and public speaking skills in a commission-based environment.',
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
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="work-container section" id="experience">
      <h2>Experience</h2>
      <p className="work-subtitle">Where I've worked</p>

      <div className="timeline">
        {jobs.map((job, i) => (
          <div
            key={job.id}
            className="timeline-item"
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <div className="timeline-dot" />
            <p className="timeline-date">{job.date}</p>
            <p className="timeline-role">{job.role}</p>
            <p className="timeline-company">{job.company}</p>
            <ul className="timeline-desc">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
