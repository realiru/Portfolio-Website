import './Education.css';

function Education() {

  return (
    <div className="education-container section" id="education">
      <h2>Education</h2>
      <p className="education-subtitle">Academic background</p>

      <div className="education-grid">
        <div className="edu-card">
          <div className="edu-header">
            <div>
              <h3>Bachelor of Science - Computer Science</h3>
              <p className="edu-institution">University of Auckland</p>
              <p className="edu-dates">2021 – 2024</p>
            </div>
            <span className="edu-badge">Awarded</span>
          </div>
          <div className="edu-courses">
            <p className="edu-courses-label">Key courses</p>
            <div className="edu-course-grid">
              <span className="edu-course">Cyber Security <em>A</em></span>
              <span className="edu-course">Information Security in Business <em>B+</em></span>
              <span className="edu-course">Business Systems Analysis <em>A</em></span>
              <span className="edu-course">Human-Computer Interaction <em>A</em></span>
              <span className="edu-course">Critical Thinking <em>A</em></span>
              <span className="edu-course">Data Communications and Security <em>C+</em></span>
            </div>
          </div>
        </div>

        <div className="edu-card edu-card--cert">
          <div className="edu-header">
            <div>
              <h3>CompTIA A+ (220-1101)</h3>
              <p className="edu-institution">CompTIA</p>
              <p className="edu-dates">In Progress · Est. 2026</p>
            </div>
            <span className="edu-badge edu-badge--progress">In Progress</span>
          </div>
          <p className="edu-cert-desc">
            Self-study toward industry-standard IT certification.
            Covers hardware, networking, cloud computing, and security fundamentals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
