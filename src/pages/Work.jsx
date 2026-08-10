import "../styles/Work.css";

function Work() {
  const workItems = [
    {
      id: 1,
      number: "WK / 001",
      title: "Selected Brand Project",
      category: "Brand Creation",
      year: "2026",
      layout: "large",
    },
    {
      id: 2,
      number: "WK / 002",
      title: "Packaging Direction",
      category: "Creative Direction",
      year: "2026",
      layout: "tall",
    },
    {
      id: 3,
      number: "WK / 003",
      title: "Visual Identity Study",
      category: "Brand Identity",
      year: "2026",
      layout: "standard",
    },
    {
      id: 4,
      number: "WK / 004",
      title: "Business Elevation",
      category: "Brand Elevation",
      year: "2026",
      layout: "wide",
    },
    {
      id: 5,
      number: "WK / 005",
      title: "Digital Experience",
      category: "Web Direction",
      year: "2026",
      layout: "standard",
    },
  ];

  return (
    <main className="work-page">
      {/* ========================================
          WORK INTRODUCTION
      ======================================== */}
      <section className="work-intro">
        <div className="work-intro-meta">
          <p>Selected Work</p>
          <span>NDOSSEEYY / Portfolio</span>
        </div>

        <div className="work-intro-content">
          <h1>
            Ideas made
            <br />
            visible.
          </h1>

          <p>
            Selected branding, design, creative direction and visual work
            created across different kinds of businesses and ideas.
          </p>
        </div>
      </section>

      {/* ========================================
          WORK FILTERS
      ======================================== */}
      <section className="work-filter-bar">
        <p>Browse</p>

        <div className="work-filters">
          <button type="button" className="work-filter-active">
            All
          </button>

          <button type="button">Branding</button>
          <button type="button">Elevation</button>
          <button type="button">Graphic Design</button>
          <button type="button">Digital</button>
          <button type="button">Creative Direction</button>
        </div>
      </section>

      {/* ========================================
          SELECTED WORK
      ======================================== */}
      <section className="work-grid">
        {workItems.map((item) => (
          <article
            className={`work-card work-card-${item.layout}`}
            key={item.id}
          >
            <div className="work-card-media">
              <span>{item.number}</span>

              <p>Visual media will live here.</p>
            </div>

            <div className="work-card-info">
              <div>
                <p className="work-card-category">{item.category}</p>
                <h2>{item.title}</h2>
              </div>

              <span>{item.year}</span>
            </div>
          </article>
        ))}
      </section>

      {/* ========================================
          WORK NOTE
      ======================================== */}
      <section className="work-note">
        <p>More than finished logos.</p>

        <h2>
          The work can include the identity, packaging, photography direction,
          digital presence, presentation and the way the business is
          experienced.
        </h2>
      </section>
    </main>
  );
}

export default Work;