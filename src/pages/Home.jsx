import { Link } from "react-router";
import ConceptCard from "../components/ConceptCard";
import conceptsData from "../data/conceptsData";
import homeHeroFilm from "../assets/videos/home/home-hero-film.mp4";
import homeImagineFeature from "../assets/images/home/home-imagine-feature.jpg";
import "../styles/Home.css";

function Home() {
  const featuredConcepts = conceptsData.slice(0, 3);

  const services = [
    {
      number: "01",
      title: "Ready-Made Brand Concepts",
      description: "I create the business. You make it real.",
      link: "/concepts",
    },
    {
      number: "02",
      title: "Custom Brand Creation",
      description: "You bring the idea. I build its world.",
      link: "/services",
    },
    {
      number: "03",
      title: "Brand Elevation",
      description: "The business exists. Now let’s reconsider how it feels.",
      link: "/services",
    },
    {
      number: "04",
      title: "Creative Design",
      description: "For the things your business simply needs to look good.",
      link: "/services",
    },
  ];

  return (
    <main className="home-page">
      {/* ========================================
              CINEMATIC HERO
          ======================================== */}
          <section className="home-hero">
            <div className="home-hero-media">
              <video
                className="home-hero-video"
                src={homeHeroFilm}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            </div>

            <div className="home-hero-overlay" />

            <div className="home-hero-content">
              <div className="home-hero-top">
                <p>Creative Business &amp; Brand Studio</p>
                <span>Johannesburg · South Africa</span>
              </div>

              <div className="home-hero-bottom">
                <h1>
                  Imagine
                  <br />
                  it differently.
                </h1>

                <div className="home-hero-intro">
                  <p>
                    NDOSSEEYY creates business concepts, brands, visual worlds and
                    creative direction for ideas that deserve to feel considered.
                  </p>

                  <Link to="/work">Explore the Work ↘</Link>
                </div>
              </div>
            </div>
          </section>
          
      {/* ========================================
          WHAT NDOSSEEYY DOES
      ======================================== */}
      <section className="home-definition">
        <p className="home-section-label">What is NDOSSEEYY?</p>

        <div className="home-definition-grid">
          <h2>
            I don’t just make
            <br />
            things look better.
          </h2>

          <div className="home-definition-copy">
            <p>
              I think about the business, the customer, the experience, the
              presentation and the possibilities around the idea.
            </p>

            <p>
              Sometimes that means creating a brand from nothing. Sometimes it
              means developing an entire business concept. Sometimes it means
              looking at something that already exists and asking:
            </p>

            <strong>What could this become?</strong>
          </div>
        </div>
      </section>

      {/* ========================================
          IMAGINE IF
      ======================================== */}
      <section className="home-imagine">
        <div className="home-imagine-media">
          <div className="home-imagine-placeholder">
            <span>IMAGINE IF…</span>

            <div>
              <p>Ordinary idea</p>
              <span>→</span>
              <p>Entire brand world</p>
            </div>
          </div>
        </div>

        <div className="home-imagine-copy">
          <p className="home-section-label">Imagine If...</p>

          <h2>
            What if we took
            something ordinary
            seriously?
          </h2>

          <p>
            A familiar product. A small stall. A service people see every day.
            Then we reconsider the identity, presentation, photography,
            packaging, customer and experience around it.
          </p>

          <Link to="/media">See How NDOSSEEYY Thinks →</Link>
        </div>
      </section>

      {/* ========================================
          FEATURED CONCEPTS
      ======================================== */}
      <section className="home-concepts">
        <div className="home-section-heading">
          <div>
            <p className="home-section-label">The Concept Archive</p>

            <h2>
              Businesses waiting
              <br />
              to become real.
            </h2>
          </div>

          <Link to="/concepts">View All Concepts →</Link>
        </div>

        <div className="home-concepts-grid">
          {featuredConcepts.map((concept, index) => (
            <ConceptCard
              key={concept.id}
              slug={concept.slug}
              number={concept.number}
              title={concept.title}
              category={concept.category}
              status={concept.status}
              image={concept.image}
              featured={index === 0}
            />
          ))}
        </div>
      </section>

      {/* ========================================
          SERVICES
      ======================================== */}
      <section className="home-services">
        <div className="home-services-heading">
          <p className="home-section-label">Ways to Work Together</p>

          <p>
            From the first idea to the details people eventually experience.
          </p>
        </div>

        <div className="home-service-list">
          {services.map((service) => (
            <Link
              to={service.link}
              className="home-service-row"
              key={service.number}
            >
              <span>{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="home-service-arrow">↗</span>
            </Link>
          ))}
        </div>

        <div className="home-services-bottom">
          <Link to="/services">Explore Services →</Link>
        </div>
      </section>

      {/* ========================================
          VISUAL WORK
      ======================================== */}
      <section className="home-work">
        <div className="home-section-heading">
          <div>
            <p className="home-section-label">Selected Work</p>

            <h2>
              Ideas made
              <br />
              visible.
            </h2>
          </div>

          <Link to="/work">View Work →</Link>
        </div>

        <div className="home-work-grid">
          <Link to="/work" className="home-work-piece home-work-piece-large">
            <div className="home-work-placeholder">
              <span>Brand / Creative Direction</span>
              <p>Featured project media</p>
            </div>
          </Link>

          <Link to="/work" className="home-work-piece">
            <div className="home-work-placeholder">
              <span>Graphic / Digital</span>
              <p>Selected visual work</p>
            </div>
          </Link>

          <Link to="/work" className="home-work-piece">
            <div className="home-work-placeholder">
              <span>Packaging / Identity</span>
              <p>Selected visual work</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ========================================
          MEDIA / CREATIVE ARCHIVE
      ======================================== */}
      <section className="home-media">
        <div className="home-media-copy">
          <p className="home-section-label">The Media Library</p>

          <h2>
            Not everything
            needs to become
            a project.
          </h2>

          <p>
            Some things exist because I wanted to design them, photograph them,
            animate them, edit them or see what would happen if the idea became
            visual.
          </p>

          <Link to="/media">Enter the Media Library →</Link>
        </div>

        <div className="home-media-wall">
          <div className="home-media-tile home-media-tile-a">
            <span>Image</span>
          </div>

          <div className="home-media-tile home-media-tile-b">
            <span>Motion</span>
            <div className="home-media-play">Play</div>
          </div>

          <div className="home-media-tile home-media-tile-c">
            <span>Experiment</span>
          </div>

          <div className="home-media-tile home-media-tile-d">
            <span>Photography</span>
          </div>
        </div>
      </section>

      {/* ========================================
          ABOUT NDOSSEEYY
      ======================================== */}
      <section className="home-about">
        <div className="home-about-media">
          <div className="home-about-image-placeholder">
            <span>ANIN LAUST / EDITORIAL PORTRAIT</span>
          </div>
        </div>

        <div className="home-about-copy">
          <p className="home-section-label">Meet the Mind Behind NDOSSEEYY</p>

          <h2>
            I was never
            only one thing.
          </h2>

          <p>
            Design taught me to see. Technology taught me to build. NDOSSEEYY
            is where those different parts meet — business, creativity,
            strategy, design and possibility.
          </p>

          <Link to="/about">Meet Anin →</Link>
        </div>
      </section>

      {/* ========================================
          WATCH NDOSSEEYY
      ======================================== */}
      <section className="home-watch">
        <div className="home-section-heading home-watch-heading">
          <div>
            <p className="home-section-label">Watch NDOSSEEYY</p>

            <h2>
              Build it.
              <br />
              Elevate it.
              <br />
              Think about it.
            </h2>
          </div>

          <Link to="/media">Watch More →</Link>
        </div>

        <div className="home-watch-grid">
          <article className="home-video-card home-video-card-featured">
            <div className="home-video-placeholder">
              <span>YouTube</span>

              <div className="home-video-play">Play</div>

              <p>Build This Business</p>
            </div>
          </article>

          <article className="home-video-card">
            <div className="home-video-placeholder">
              <span>Short Form</span>

              <div className="home-video-play">Play</div>

              <p>Imagine If...</p>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          PHILOSOPHY
      ======================================== */}
      <section className="home-philosophy">
        <p className="home-section-label">NDOSSEEYY Thinks</p>

        <h2>
          A small business
          doesn’t have to
          think small.
        </h2>

        <div className="home-philosophy-bottom">
          <p>
            Premium is not always expensive. Good presentation is not reserved
            for enormous companies. Thoughtfulness changes how people
            experience a business.
          </p>

          <Link to="/about">More About the Philosophy →</Link>
        </div>
      </section>

      {/* ========================================
          FINAL CTA
      ======================================== */}
      <section className="home-ending">
        <p className="home-section-label">Have Something in Mind?</p>

        <div className="home-ending-content">
          <h2>
            Let’s see
            <br />
            what it could become.
          </h2>

          <Link to="/contact">Start a Project ↗</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;