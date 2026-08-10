import { Link } from "react-router";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ========================================
          FOOTER INTRO
      ======================================== */}
      <div className="footer-top">
        <p className="footer-label">NDOSSEEYY</p>

        <h2>
          Ideas deserve
          <br />
          somewhere to become real.
        </h2>
      </div>

      {/* ========================================
          FOOTER LINKS
      ======================================== */}
      <div className="footer-grid">
        {/* Explore */}
        <div className="footer-column">
          <p className="footer-column-title">Explore</p>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/concepts">Concepts</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/media">Media</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

        {/* Work Together */}
        <div className="footer-column">
          <p className="footer-column-title">Work Together</p>

          <div className="footer-links">
            <Link to="/contact">Start a Project</Link>
            <Link to="/concepts">Acquire a Concept</Link>
            <a href="mailto:ndosseeyy@gmail.com">
              Email NDOSSEEYY
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="footer-column">
          <p className="footer-column-title">Follow</p>

          <div className="footer-links footer-social-links">
            <span>TikTok</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>

          <p className="footer-social-note">
            Social links will be connected once the NDOSSEEYY accounts are
            ready.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact-column">
          <p className="footer-column-title">Contact</p>

          <a
            href="mailto:ndosseeyy@gmail.com"
            className="footer-email"
          >
            ndosseeyy@gmail.com
          </a>

          <p>Johannesburg, South Africa</p>
        </div>
      </div>

      {/* ========================================
          FOOTER BOTTOM
      ======================================== */}
      <div className="footer-bottom">
        <div>
          <p>© {currentYear} NDOSSEEYY</p>
          <p>Ideas Before They Become Obvious.</p>
        </div>

        <div className="footer-bottom-right">
          <span>Privacy — coming before launch</span>
          <span>Terms — coming before launch</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;