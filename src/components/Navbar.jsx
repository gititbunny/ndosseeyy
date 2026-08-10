import { useState } from "react";
import { NavLink } from "react-router";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="NDOSSEEYY Home"
        >
          NDOSSEEYY
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Main navigation">
          <NavLink to="/concepts">Concepts</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {/* Desktop CTA */}
        <NavLink to="/contact" className="navbar-cta">
          Start a Project
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          <NavLink to="/concepts" onClick={closeMenu}>
            Concepts
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/work" onClick={closeMenu}>
            Work
          </NavLink>

          <NavLink to="/media" onClick={closeMenu}>
            Media
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-project-link"
            onClick={closeMenu}
          >
            Start a Project
          </NavLink>
        </nav>

        <div className="mobile-menu-footer">
          <p>Creative ideas, built beautifully.</p>
          <a href="mailto:ndosseeyy@gmail.com">ndosseeyy@gmail.com</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;