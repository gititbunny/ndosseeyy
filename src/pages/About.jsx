import { Link } from "react-router";
import aninEditorial from "../assets/images/about/about-anin-editorial.png";
import aboutCreativeFilm from "../assets/videos/about/about-creative-film.mp4";
import "../styles/About.css";

function About() {
  const disciplines = [
    "Brand Creation",
    "Graphic Design",
    "Digital Design",
    "Creative Direction",
    "Business Concepts",
    "UX / UI",
    "Web Development",
    "Software Development",
    "Creative Strategy",
  ];

  return (
    <main className="about-page">
      {/* ========================================
          ABOUT INTRODUCTION
      ======================================== */}
      <section className="about-intro">
        <div className="about-intro-meta">
          <p>Meet the mind behind NDOSSEEYY</p>
          <span>Johannesburg, South Africa</span>
        </div>

        <div className="about-intro-grid">
          <h1>
            I was never
            <br />
            only one thing.
          </h1>

          <div className="about-intro-copy">
            <p className="about-intro-name">Anin Laust</p>

            <p>
              Designer. Developer. Creative thinker. Business concept builder.
              Someone constantly imagining how things could look, work, feel
              and become something more.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          PERSONAL MEDIA
      ======================================== */}
      <section className="about-media">
        <div className="about-media-main">
          <span>Portrait / Creative Film</span>

          <p>
            A photograph, cinematic portrait or short NDOSSEEYY film can live
            here.
          </p>
        </div>

        <div className="about-media-secondary">
          <span>Behind the Work</span>

          <p>
            Designing, sketching, coding, creating or building something.
          </p>
        </div>
      </section>

      {/* ========================================
          CREATIVE IDENTITY
      ======================================== */}
      <section className="about-creative">
        <p className="about-section-label">The Creative</p>

        <div className="about-creative-grid">
          <h2>
            Creativity was never
            <br />
            just my job.
          </h2>

          <div className="about-creative-copy">
            <p>
              I have always been drawn to making things — identities, graphics,
              interfaces, concepts, digital experiences and entire worlds
              around ideas.
            </p>

            <p>
              What interests me most is possibility. I can look at an ordinary
              product, an unfinished idea or an existing business and
              immediately start thinking about what else it could become.
            </p>

            <p>
              NDOSSEEYY is where that way of thinking finally gets to exist
              without being reduced to a single job title.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          CREATIVE + TECHNICAL
      ======================================== */}
      <section className="about-duality">
        <div className="about-duality-heading">
          <p className="about-section-label">Two Sides of the Same Mind</p>

          <h2>
            I design the experience.
            <br />
            I can also understand
            <br />
            how it gets built.
          </h2>
        </div>

        <div className="about-duality-grid">
          <article className="about-duality-card">
            <span>01 / Creative</span>

            <h3>Design</h3>

            <p>
              My creative background spans graphic design, visual identity,
              digital design, UX/UI, branding and translating business ideas
              into visual experiences.
            </p>
          </article>

          <article className="about-duality-card">
            <span>02 / Technical</span>

            <h3>Technology</h3>

            <p>
              My technical work has taken me through software development,
              React, JavaScript, Python, APIs, automation, testing and software
              integration.
            </p>
          </article>

          <article className="about-duality-card about-duality-card-wide">
            <span>03 / NDOSSEEYY</span>

            <h3>The intersection.</h3>

            <p>
              NDOSSEEYY exists between those worlds — creativity with structure,
              business thinking with visual instinct, and ideas considered from
              both the experience people see and the systems that may eventually
              support them.
            </p>
          </article>
        </div>
      </section>

      {/* ========================================
          WHAT I DO
      ======================================== */}
      <section className="about-disciplines">
        <div className="about-disciplines-heading">
          <p className="about-section-label">What I Move Between</p>
          <span>Not necessarily in this order.</span>
        </div>

        <div className="about-discipline-list">
          {disciplines.map((discipline, index) => (
            <div className="about-discipline" key={discipline}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{discipline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          JOURNEY
      ======================================== */}
      <section className="about-journey">
        <div className="about-journey-heading">
          <p className="about-section-label">The Journey So Far</p>

          <h2>
            Design taught me to see.
            <br />
            Technology taught me to build.
          </h2>
        </div>

        <div className="about-timeline">
          <article className="about-timeline-item">
            <span>2019</span>

            <div>
              <h3>Graphic Design</h3>

              <p>
                Beginning with freelance design, branding assets and visual
                work across technology and lifestyle businesses.
              </p>
            </div>
          </article>

          <article className="about-timeline-item">
            <span>2021—2024</span>

            <div>
              <h3>Digital &amp; Visual Design</h3>

              <p>
                Moving deeper into UI/UX, digital layouts, visual identities
                and translating business requirements into designed
                experiences.
              </p>
            </div>
          </article>

          <article className="about-timeline-item">
            <span>2024—2026</span>

            <div>
              <h3>Software &amp; Engineering</h3>

              <p>
                Building applications, working with software integration and
                testing, Python automation, technical systems and structured
                problem solving.
              </p>
            </div>
          </article>

          <article className="about-timeline-item">
            <span>Now</span>

            <div>
              <h3>NDOSSEEYY</h3>

              <p>
                Bringing the different parts together to imagine businesses,
                create brands, develop concepts and build visual worlds around
                ideas worth exploring.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================
          PHILOSOPHY
      ======================================== */}
      <section className="about-philosophy">
        <p className="about-section-label">What I Believe</p>

        <blockquote>
          “I don’t think a small beginning should require a small imagination.”
        </blockquote>

        <div className="about-philosophy-copy">
          <p>
            Good presentation is not reserved for companies with enormous
            budgets.
          </p>

          <p>
            A business can be small and still feel thoughtful, memorable,
            trustworthy and beautifully considered.
          </p>

          <p>
            Sometimes people simply need to see what is possible before they
            know what they want to build.
          </p>
        </div>
      </section>

      {/* ========================================
          ABOUT CTA
      ======================================== */}
      <section className="about-ending">
        <p className="about-section-label">Now You Know a Little More</p>

        <div className="about-ending-content">
          <h2>
            Now tell me
            <br />
            what you’re imagining.
          </h2>

          <Link to="/contact">Start a Project →</Link>
        </div>
      </section>
    </main>
  );
}

export default About;