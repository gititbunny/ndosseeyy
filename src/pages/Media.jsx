import "../styles/Media.css";

function Media() {
  const mediaItems = [
    {
      id: 1,
      number: "MD / 001",
      title: "Creative Study",
      category: "Graphic Design",
      type: "Image",
      layout: "large",
    },
    {
      id: 2,
      number: "MD / 002",
      title: "Photography Direction",
      category: "Creative Direction",
      type: "Image",
      layout: "portrait",
    },
    {
      id: 3,
      number: "MD / 003",
      title: "Motion Experiment",
      category: "Motion",
      type: "Video",
      layout: "standard",
    },
    {
      id: 4,
      number: "MD / 004",
      title: "Packaging Study",
      category: "Packaging",
      type: "Image",
      layout: "standard",
    },
    {
      id: 5,
      number: "MD / 005",
      title: "Visual Experiment",
      category: "Experiment",
      type: "Image",
      layout: "landscape",
    },
    {
      id: 6,
      number: "MD / 006",
      title: "Digital Concept",
      category: "Digital",
      type: "Video",
      layout: "portrait",
    },
    {
      id: 7,
      number: "MD / 007",
      title: "Campaign Visual",
      category: "Graphic Design",
      type: "Image",
      layout: "standard",
    },
    {
      id: 8,
      number: "MD / 008",
      title: "Brand World Study",
      category: "Branding",
      type: "Image",
      layout: "wide",
    },
  ];

  return (
    <main className="media-page">
      {/* ========================================
          MEDIA INTRODUCTION
      ======================================== */}
      <section className="media-intro">
        <div className="media-intro-top">
          <p>NDOSSEEYY Media Library</p>
          <span>Images · Motion · Ideas · Experiments</span>
        </div>

        <div className="media-intro-content">
          <h1>A visual archive of things I wanted to make.</h1>

          <p>
            Finished work, unfinished thoughts, creative experiments,
            photography direction, motion, design studies and ideas that simply
            needed somewhere to exist.
          </p>
        </div>
      </section>

      {/* ========================================
          MEDIA FILTERS
      ======================================== */}
      <section className="media-filter-bar">
        <p>Filter the Library</p>

        <div className="media-filters">
          <button type="button" className="media-filter-active">
            All
          </button>

          <button type="button">Branding</button>
          <button type="button">Graphic</button>
          <button type="button">Photography</button>
          <button type="button">Packaging</button>
          <button type="button">Digital</button>
          <button type="button">Motion</button>
          <button type="button">Experiments</button>
        </div>
      </section>

      {/* ========================================
          MEDIA LIBRARY
      ======================================== */}
      <section className="media-library">
        {mediaItems.map((item) => (
          <article
            className={`media-item media-item-${item.layout}`}
            key={item.id}
          >
            <div className="media-item-visual">
              <div className="media-item-top">
                <span>{item.number}</span>

                <span className="media-type">{item.type}</span>
              </div>

              {item.type === "Video" && (
                <div className="media-play">
                  <span>Play</span>
                </div>
              )}

              <p className="media-placeholder-text">
                {item.type} media will live here.
              </p>
            </div>

            <div className="media-item-info">
              <div>
                <p>{item.category}</p>
                <h2>{item.title}</h2>
              </div>

              <span>{item.number}</span>
            </div>
          </article>
        ))}
      </section>

      {/* ========================================
          SOCIAL CONTENT
      ======================================== */}
      <section className="media-social">
        <div className="media-social-heading">
          <p>Watch NDOSSEEYY</p>

          <h2>
            Some ideas make more sense
            <br />
            when you watch them unfold.
          </h2>
        </div>

        <div className="media-social-grid">
          <article className="social-video-card social-video-featured">
            <div className="social-video-placeholder">
              <span>YouTube</span>

              <div className="social-video-play">
                <span>Play</span>
              </div>

              <p>Featured long-form content</p>
            </div>

            <div className="social-video-info">
              <p>Build This Business</p>
              <span>Video coming soon</span>
            </div>
          </article>

          <article className="social-video-card">
            <div className="social-video-placeholder">
              <span>TikTok / Short Form</span>

              <div className="social-video-play">
                <span>Play</span>
              </div>

              <p>Selected social content</p>
            </div>

            <div className="social-video-info">
              <p>Imagine If...</p>
              <span>Video coming soon</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Media;