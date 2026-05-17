import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          Built by <strong>Hamzah Patel</strong> &nbsp;·&nbsp;
          <a href="mailto:hamzahpatel403@gmail.com">hamzahpatel403@gmail.com</a>
          &nbsp;·&nbsp; © 2025
        </p>
        <div className="footer-links">
          <a href="https://github.com/realiru" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/hamzahpatel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
