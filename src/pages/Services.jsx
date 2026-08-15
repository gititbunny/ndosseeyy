import { Fragment } from "react";
import { Link } from "react-router";
import servicesVisualBreak from "../assets/images/work/work-003-cover.jpg";
import playbookVisual from "../assets/images/media/media-008.jpg";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Ready-Made Brand Concepts",
      statement: "I create the business. You make it real.",
      description:
        "Original business concepts developed independently by NDOSSEEYY and made available for acquisition. Each concept is built as a complete world rather than simply a logo or business-name idea.",
      price: "From R15,000",
      items: [
        "Business concept",
        "Brand name and identity direction",
        "Target customer",
        "Product or service direction",
        "Packaging and presentation concepts",
        "Social-media direction",
        "Photography direction",
        "Launch ideas",
        "Website direction",
        "NDOSSEEYY Brand Playbook",
      ],
      action: "Explore Available Concepts",
      link: "/concepts",
    },
    {
      number: "02",
      title: "Custom Brand Creation",
      statement: "You bring the idea. I build its world.",
      description:
        "For businesses that already know what they want to create but need the strategy, identity and visual direction required to turn the idea into a considered brand.",
      price: "From R20,000",
      items: [
        "Creative consultation",
        "Research and positioning",
        "Brand strategy",
        "Visual identity",
        "Colour and typography direction",
        "Brand personality",
        "Creative applications",
        "Presentation direction",
        "Launch direction",
        "NDOSSEEYY Brand Playbook",
      ],
      action: "Start a Brand Project",
      link: "/contact?service=custom-brand",
    },
    {
      number: "03",
      title: "Brand Elevation",
      statement: "The business exists. Now let’s reconsider how it feels.",
      description:
        "For existing businesses that need stronger presentation, consistency and creative direction without necessarily starting again from the beginning.",
      price: "From R15,000",
      items: [
        "Existing brand review",
        "Visual improvement",
        "Packaging direction",
        "Customer experience",
        "Social-media presentation",
        "Photography direction",
        "Menus and promotional material",
        "Product presentation",
        "Creative recommendations",
        "NDOSSEEYY Brand Playbook",
      ],
      action: "Elevate My Business",
      link: "/contact?service=brand-elevation",
    },
    {
      number: "04",
      title: "Creative Design",
      statement: "For the things your business simply needs to look good.",
      description:
        "Standalone creative work for businesses that do not require a complete branding engagement but still want intentional, professionally considered design.",
      price: "From R850",
      items: [
        "Social-media graphics",
        "Flyers and posters",
        "Menus and price lists",
        "Product labels",
        "Packaging graphics",
        "Business cards",
        "Digital catalogues",
        "Promotional campaigns",
        "Product mockups",
        "Photo and content graphics",
      ],
      action: "Request Creative Work",
      link: "/contact?service=creative-design",
    },
  ];

  return (
    <main className="services-page">
      {/* ========================================
          SERVICES INTRODUCTION
      ======================================== */}
      <section className="services-intro">
        <div className="services-intro-top">
          <p className="services-label">Ways to Work With NDOSSEEYY</p>
          <span>Four core services</span>
        </div>

        <div className="services-intro-content">
          <h1>
            From the first idea
            <br />
            to how it is experienced.
          </h1>

          <p>
            Whether the business is still an idea, already operating, or simply
            needs something beautifully designed, the approach stays the same:
            make it intentional.
          </p>
        </div>
      </section>

      {/* ========================================
          CORE SERVICES
      ======================================== */}
      <section className="services-list">
        {services.map((service, index) => (
          <Fragment key={service.number}>
            <article className="service-row">
              <div className="service-number">
                <span>{service.number}</span>
              </div>

              <div className="service-main">
                <p className="service-statement">{service.statement}</p>

                <h2>{service.title}</h2>

                <p className="service-description">{service.description}</p>

                <Link to={service.link} className="service-link">
                  {service.action} →
                </Link>
              </div>

              <div className="service-details">
                <div className="service-price">
                  <span>Projects</span>
                  <strong>{service.price}</strong>
                </div>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            {index === 1 && (
              <div className="services-visual-break">
                <img
                  src={servicesVisualBreak}
                  alt=""
                  loading="lazy"
                />
              </div>
            )}
          </Fragment>
        ))}
      </section>

      {/* ========================================
          SIGNATURE ADDITIONAL OFFERINGS
      ======================================== */}
      <section className="service-addons">
        <div className="service-addons-heading">
          <p className="services-label">Additional Ways to Work Together</p>

          <h2>
            Sometimes you don’t need
            <br />
            the entire brand rebuilt.
          </h2>
        </div>

        <div className="service-addons-grid">
          <article className="service-addon service-addon-visual">
            <img
              src={playbookVisual}
              alt=""
              className="service-addon-image"
              loading="lazy"
            />

            <div className="service-addon-top">
              <span>ND / PLAYBOOK</span>
              <span>From R7,500</span>
            </div>

            <div className="service-addon-content">
              <h3>Standalone Brand Playbook</h3>

              <p>
                Strategic and creative direction for businesses that already
                have branding but need clarity on how to present, photograph,
                market, package and grow the brand more intentionally.
              </p>

              <Link to="/contact?service=brand-playbook">
                Enquire About a Playbook →
              </Link>
            </div>
          </article>

          <article className="service-addon">
            <div className="service-addon-top">
              <span>ND / SESSION</span>
              <span>From R1,500</span>
            </div>

            <div className="service-addon-content">
              <h3>Private Strategy Session</h3>

              <p>
                A focused session for ideas, creative direction, business
                presentation, positioning or figuring out what the next move
                should be.
              </p>

              <Link to="/contact?service=strategy-session">
                Book a Strategy Session →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          SERVICE CTA
      ======================================== */}
      <section className="services-ending">
        <p className="services-label">Not Sure What You Need?</p>

        <div>
          <h2>Start with the business.</h2>

          <Link to="/contact">Tell NDOSSEEYY About It →</Link>
        </div>
      </section>
    </main>
  );
}

export default Services;