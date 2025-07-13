import React from "react";
import { Link, useLocation } from "react-router";
import './Navbar.scss';

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/LOGO.png" alt="Kasa" />
        </Link>
      </div>
      <nav className="navbar__links">
        <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>
          Accueil
        </Link>
        <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`}>
          À propos
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
