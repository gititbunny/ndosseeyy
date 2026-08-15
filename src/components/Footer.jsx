import { Link } from "react-router";
import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
  SiPinterest,
  SiFacebook,
  SiThreads,
} from "react-icons/si";

import "../styles/Footer.css";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <SiInstagram />,
      url: null,
    },
    {
      name: "TikTok",
      icon: <SiTiktok />,
      url: null,
    },
    {
      name: "YouTube",
      icon: <SiYoutube />,
      url: null,
    },
    {
      name: "Pinterest",
      icon: <SiPinterest />,
      url: null,
    },
    {
      name: "Facebook",
      icon: <SiFacebook />,
      url: null,
    },
    {
      name: "Threads",
      icon: <SiThreads />,
      url: null,
    },
  ];

  return (
    <footer className="footer">
      {/* ========================================
          FOOTER INTRO
      ======================================== */}
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            NDOSSEEYY
          </Link>

          <p className="footer-brand-statement">
            I imagine business ideas, brands and visual worlds differently.
          </p>

          <p className="footer-location">
            Johannesburg · South Africa
          </p>
        </div>

        {/* ========================================
            NAVIGATION
        ======================================== */}
        <div className="footer-column">
          <p className="footer-column-title">Explore</p>

          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/concepts">Concepts</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/media">Media</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

        {/* ========================================
            WORK TOGETHER
        ======================================== */}
        <div className="footer-column">
          <p className="footer-column-title">Work With Me</p>

          <nav className="footer-links">
            <Link to="/contact">Start a Project</Link>

            <Link to="/contact?service=custom-brand">
              Custom Brand Creation
            </Link>

            <Link to="/contact?service=brand-elevation">
              Brand Elevation
            </Link>

            <Link to="/contact?service=creative-design">
              Creative Design
            </Link>
          </nav>
        </div>

        {/* ========================================
            CONTACT
        ======================================== */}
        <div className="footer-column footer-contact">
          <p className="footer-column-title">Contact</p>

          <a href="mailto:ndosseeyy@gmail.com">
            ndosseeyy@gmail.com
          </a>

          <Link to="/contact" className="footer-project-link">
            Tell me what you're imagining →
          </Link>
        </div>
      </div>

      {/* ========================================
          SOCIALS
      ======================================== */}
      <div className="footer-social-section">
        <p>Find NDOSSEEYY</p>

        <div className="footer-socials">
          {socialLinks.map((social) =>
            social.url ? (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={`NDOSSEEYY on ${social.name}`}
              >
                <span className="footer-social-icon">
                  {social.icon}
                </span>

                <span className="footer-social-name">
                  {social.name}
                </span>
              </a>
            ) : (
              <div
                key={social.name}
                className="footer-social-link footer-social-link-disabled"
                aria-label={`${social.name} profile`}
              >
                <span className="footer-social-icon">
                  {social.icon}
                </span>

                <span className="footer-social-name">
                  {social.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* ========================================
          FOOTER BOTTOM
      ======================================== */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NDOSSEEYY
        </p>

        <p className="footer-philosophy">
          Imagine It Differently
        </p>

        <div className="footer-legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;