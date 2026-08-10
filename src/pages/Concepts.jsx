import ConceptCard from "../components/ConceptCard";
import conceptsData from "../data/conceptsData";
import "../styles/Concepts.css";

function Concepts() {
  return (
    <main className="concepts-page">
      {/* ========================================
          CONCEPTS INTRODUCTION
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
          CONCEPT ARCHIVE
      ======================================== */}
      <section className="concepts-archive">
        <div className="concepts-archive-heading">
          <p className="concepts-section-label">Explore the Archive</p>

          <p className="concepts-count">
            {conceptsData.length}{" "}
            {conceptsData.length === 1 ? "Concept" : "Concepts"}
          </p>
        </div>

        <div className="concept-placeholder-grid">
          {conceptsData.map((concept) => (
            <ConceptCard
              key={concept.id}
              number={concept.number}
              title={concept.title}
              category={concept.category}
              status={concept.status}
              image={concept.image}
              featured={concept.featured}
            />
          ))}
        </div>

        <p className="concepts-placeholder-note">
          Development placeholders for now. Real NDOSSEEYY concepts and imagery
          will replace these as the archive grows.
        </p>
      </section>
    </main>
  );
}

export default Concepts;