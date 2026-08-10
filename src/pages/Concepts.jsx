import "../styles/Concepts.css";

function Concepts() {
  return (
    <main className="concepts-page">
      {/* ========================================
          CONCEPTS HERO
      ======================================== */}
      <section className="concepts-hero">
        <div className="concepts-hero-top">
          <p className="concepts-eyebrow">The Concept Archive</p>

          <p className="concepts-number">ND / CONCEPTS</p>
        </div>

        <div className="concepts-hero-content">
          <h1>
            Businesses,
            <br />
            imagined differently.
          </h1>

          <p className="concepts-hero-description">
            Original business concepts created from the ground up by NDOSSEEYY —
            from the idea and identity to the visual world, customer experience
            and direction for launch.
          </p>
        </div>
      </section>

      {/* ========================================
          ARCHIVE INTRODUCTION
      ======================================== */}
      <section className="concepts-intro">
        <p className="concepts-section-label">Ready-Made Brand Concepts</p>

        <div className="concepts-intro-grid">
          <h2>
            Some ideas are waiting
            <br />
            for someone to build them.
          </h2>

          <div className="concepts-intro-copy">
            <p>
              Each concept begins as an independent NDOSSEEYY idea and develops
              into a considered business world with its own positioning,
              identity, audience, visual direction and possibilities.
            </p>

            <p>
              Available concepts can be acquired. Once acquired, they remain
              inside the archive as part of the NDOSSEEYY creative history.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          TEMPORARY CONCEPT ARCHIVE
      ======================================== */}
      <section className="concepts-archive">
        <div className="concepts-archive-heading">
          <p className="concepts-section-label">Explore the Archive</p>
          <p className="concepts-count">Concepts coming soon</p>
        </div>

        <div className="concept-placeholder-grid">
          <article className="concept-placeholder concept-placeholder-large">
            <div className="concept-placeholder-visual">
              <span>ND / 001</span>
            </div>

            <div className="concept-placeholder-info">
              <p>Concept 001</p>
              <span>Coming Soon</span>
            </div>
          </article>

          <article className="concept-placeholder">
            <div className="concept-placeholder-visual">
              <span>ND / 002</span>
            </div>

            <div className="concept-placeholder-info">
              <p>Concept 002</p>
              <span>Coming Soon</span>
            </div>
          </article>

          <article className="concept-placeholder">
            <div className="concept-placeholder-visual">
              <span>ND / 003</span>
            </div>

            <div className="concept-placeholder-info">
              <p>Concept 003</p>
              <span>Coming Soon</span>
            </div>
          </article>
        </div>

        <p className="concepts-placeholder-note">
          These are temporary development placeholders. Your real concepts will
          replace them as we build the archive.
        </p>
      </section>
    </main>
  );
}

export default Concepts;