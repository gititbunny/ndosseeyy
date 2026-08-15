import { Link } from "react-router";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      {/* ========================================
          NOT FOUND
      ======================================== */}
      <section className="not-found-content">
        <div className="not-found-meta">
          <p>404 / Not Found</p>
          <span>NDOSSEEYY</span>
        </div>

        <div className="not-found-main">
          <h1>
            Nothing
            <br />
            here.
          </h1>

          <div className="not-found-copy">
            <p>
              Whatever you were looking for doesn’t seem to exist at this
              address.
            </p>

            <div className="not-found-actions">
              <Link to="/">Return Home →</Link>
              <Link to="/work">Explore Work →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;