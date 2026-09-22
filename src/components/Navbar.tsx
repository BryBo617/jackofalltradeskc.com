import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🔧</span>
        <span className="brand-name">Jack of All Trades KC</span>
      </div>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li>
          <a href="#services" onClick={(e) => handleNav(e, 'services')}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNav(e, 'about')}>
            About
          </a>
        </li>
        <li>
          <a href="#schedule" onClick={(e) => handleNav(e, 'schedule')}>
            Schedule
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNav(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
