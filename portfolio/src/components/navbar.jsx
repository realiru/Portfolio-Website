import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          HP
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-links">Home</Link></li>
          <li><Link to="/" className="nav-links">About</Link></li>
          <li><Link to="/" className="nav-links">Skills</Link></li>
          <li><Link to="/" className="nav-links">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
