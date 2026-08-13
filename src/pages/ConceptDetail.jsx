import { Link, useParams } from "react-router";
import conceptsData from "../data/conceptsData";
import "../styles/ConceptDetail.css";

function ConceptDetail() {
  const { slug } = useParams();

  const concept = conceptsData.find((item) => item.slug === slug);

  if (!concept) {
    return (
      <main className="concept-not-found">
        <p>Concept not found.</p>
        <Link to="/concepts">Return to the Concept Archive</Link>
      </main>
    );
  }

  const isAvailable = concept.status === "Available";

  return (
    <main className="concept-detail-page">
      {/* ========================================
          CONCEPT HEADER
      ======================================== */}
      <section className="concept-detail-header">
        <div className="concept-detail-meta">
          <p>{concept.number}</p>
          <p>{concept.category}</p>

          <span
            className={`concept-detail-status ${
              isAvailable ? "status-available" : "status-acquired"
            }`}
          >
            {concept.status}
          </span>
        </div>

        <h1>{concept.title}</h1>

        <p className="concept-detail-description">
          {concept.shortDescription}
        </p>
      </section>

      {/* ========================================
          CONCEPT HERO IMAGE
      ======================================== */}
      <section className="concept-detail-featured-media">
        {concept.heroImage ? (
          <img src={concept.heroImage} alt={`${concept.title} visual direction`} />
        ) : concept.image ? (
          <img src={concept.image} alt={concept.title} />
        ) : (
          <div className="concept-detail-media-placeholder">
            <span>{concept.number}</span>
            <p>Concept imagery coming soon.</p>
          </div>
        )}
      </section>

      {/* ========================================
          CONCEPT INTRODUCTION
      ======================================== */}
      <section className="concept-detail-intro">
        <p className="concept-detail-section-label">The Idea</p>

        <div className="concept-detail-intro-grid">
          <h2>
            An idea developed
            <br />
            beyond the obvious.
          </h2>

          <p>{concept.conceptIdea}</p>
        </div>
      </section>

      {/* ========================================
          CONCEPT VISUAL WORLD
      ======================================== */}
      {concept.media && (
        <section className="concept-visual-world">
          <div className="concept-visual-heading">
            <p className="concept-detail-section-label">
              Inside the Visual World
            </p>

            <p>
              Selected pieces from the public-facing creative direction.
            </p>
          </div>

          {/* Logo */}
          <div className="concept-visual-large">
            <img
              src={concept.media.logo}
              alt={`${concept.title} logo direction`}
            />

            <span>Identity / Logo</span>
          </div>

          {/* Branding + Packaging */}
          <div className="concept-visual-pair">
            <figure>
              <img
                src={concept.media.branding}
                alt={`${concept.title} branding`}
              />

              <figcaption>Brand World</figcaption>
            </figure>

            <figure>
              <img
                src={concept.media.packaging}
                alt={`${concept.title} packaging direction`}
              />

              <figcaption>Packaging</figcaption>
            </figure>
          </div>

          {/* Film */}
          <div className="concept-visual-film">
            <video
              src={concept.media.film}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className="concept-film-label">
              <span>Concept Film</span>
            </div>
          </div>

          {/* Product */}
          <div className="concept-visual-wide">
            <img
              src={concept.media.product}
              alt={`${concept.title} product direction`}
            />

            <span>Product Direction</span>
          </div>

          {/* Photography + Digital */}
          <div className="concept-visual-pair concept-visual-pair-final">
            <figure>
              <img
                src={concept.media.photography}
                alt={`${concept.title} photography direction`}
              />

              <figcaption>Photography Direction</figcaption>
            </figure>

            <figure>
              <img
                src={concept.media.digital}
                alt={`${concept.title} digital direction`}
              />

              <figcaption>Digital Direction</figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ========================================
          PUBLIC PREVIEW
      ======================================== */}
      <section className="concept-preview">
        <div className="concept-preview-heading">
          <p className="concept-detail-section-label">Concept Preview</p>

          <p>
            A glimpse into what has already been considered for this business.
          </p>
        </div>

        <div className="concept-preview-grid">
          {concept.previewHighlights.map((highlight, index) => (
            <article className="concept-preview-item" key={highlight}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================
          LOCKED STRATEGY
      ======================================== */}
      <section className="concept-locked-section">
        <div className="concept-locked-content" aria-hidden="true">
          <div className="locked-column">
            <p>Positioning Strategy</p>
            <p>
              Detailed strategic thinking, market direction and opportunity
              development continues inside the complete concept.
            </p>
          </div>

          <div className="locked-column">
            <p>Customer Experience</p>
            <p>
              Complete customer journey, presentation recommendations and
              experience ideas are reserved for the concept owner.
            </p>
          </div>

          <div className="locked-column">
            <p>Launch Direction</p>
            <p>
              Launch ideas, campaign thinking, content direction and additional
              execution recommendations continue beyond this preview.
            </p>
          </div>
        </div>

        <div className="concept-locked-overlay">
          <p className="concept-detail-section-label">
            The Full Concept Continues
          </p>

          {isAvailable ? (
            <>
              <h2>There is more behind the idea.</h2>

              <p>
                The complete strategy, visual direction and NDOSSEEYY Brand
                Playbook are reserved for the person who acquires this concept.
              </p>

              <div className="concept-acquisition-info">
                <span>Acquisition from</span>
                <strong>{concept.startingPrice}</strong>
              </div>

              <Link
                to={`/contact?concept=${concept.slug}`}
                className="concept-acquire-button"
              >
                Enquire About This Concept
              </Link>
            </>
          ) : (
            <>
              <h2>This concept has been acquired.</h2>

              <p>
                It remains in the NDOSSEEYY archive as part of the studio&apos;s
                creative history. Its private strategic material is no longer
                available for acquisition.
              </p>

              <Link to="/concepts" className="concept-acquire-button">
                Explore Available Concepts
              </Link>
            </>
          )}
        </div>
      </section>

      {/* ========================================
          BACK TO ARCHIVE
      ======================================== */}
      <section className="concept-back-section">
        <Link to="/concepts">← Back to Concept Archive</Link>
      </section>
    </main>
  );
}

export default ConceptDetail;