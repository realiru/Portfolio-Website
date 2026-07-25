import { useEffect, useRef } from 'react';
import './Project.css';

const projects = [
  {
    id: 1,
    emoji: '🖥️',
    title: 'Active Directory Home Lab',
    description:
      'Built a two-VM Windows Server 2022 and Windows 11 domain in VirtualBox. Set up AD DS, DNS, OUs, security groups, and Group Policy, then ran real helpdesk drills: password resets, account lockouts, and group changes. Diagnosed a GPO not applying using gpresult, tracing it to a computer object in the wrong OU.',
    tags: ['Windows Server', 'Active Directory', 'Group Policy', 'DNS'],
    github: null,
    live: null,
  },
  {
    id: 2,
    emoji: '📡',
    title: 'Remote Access (Wake on LAN)',
    description:
      'Set up a Raspberry Pi as an always-on home server to remotely boot and access my Windows PC from anywhere. Built a Flask web app that sends a Wake on LAN packet on demand, then connects over a Tailscale VPN tunnel with RDP and push notifications when the PC comes online.',
    tags: ['Raspberry Pi', 'Tailscale', 'Flask', 'Networking'],
    github: null,
    live: 'https://www.linkedin.com/feed/update/urn:li:activity:7482663927487746048/',
  },
  {
    id: 3,
    emoji: '☀️',
    title: 'UV Exposure Tracker',
    description:
      'Capstone project: A React Native Android app to monitor sun exposure. Implemented custom JWT authentication after discovering the original Expo library was deprecated. Nominated for Largest Community Impact Award.',
    tags: ['React Native', 'JWT', 'TypeScript'],
    github: 'https://github.com/uoa-compsci399-s1-2024/capstone-project-2024-s1-team-7-noot-noot',
    live: null,
  },
  {
    id: 4,
    emoji: '📶',
    title: 'IoT Ping Device',
    description:
      'Two ESP8266 devices in separate homes that ping each other over the internet. Press a button on one and an LED lights up on the other, with a confirm-to-clear acknowledgement system. Devices talk over HiveMQ cloud MQTT. Handled the wiring, soldering, and firmware end to end.',
    tags: ['ESP8266', 'MQTT', 'Arduino', 'Hardware'],
    github: null,
    live: 'https://www.linkedin.com/posts/hamzahpatel_this-took-me-longer-than-i-thought-and-im-activity-7474012925213487104-CP5o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1z4YYB2WiN3RtvO8WLHWWvwpMuQTJ6fGI',
  },
  {
    id: 5,
    emoji: '🍓',
    title: 'Network-wide DNS Filter',
    description:
      'Deployed Pi-hole on a Raspberry Pi 3B for network-wide ad and DNS filtering. Configured via SSH and Linux CLI. Gained hands-on experience with networking and system administration.',
    tags: ['Linux', 'Raspberry Pi', 'Networking'],
    github: null,
    live: null,
  },
  {
    id: 6,
    emoji: '📋',
    title: 'Form Data Automation',
    description:
      "Freelance: Rebuilt a client's Squarespace form in HTML/CSS, added JavaScript validation and regex checks, and integrated Zapier webhooks to automate secure data transfer into Google Drive and Sheets.",
    tags: ['JavaScript', 'Zapier', 'HTML/CSS'],
    github: null,
    live: null,
  },
  {
    id: 7,
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
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-container section" id="projects">
      <h2>Projects</h2>
      <p className="projects-subtitle">Check out my work</p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            ref={(el) => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
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
