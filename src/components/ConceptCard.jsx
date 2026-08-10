import { Link } from "react-router";
import "../styles/ConceptCard.css";

function ConceptCard({
  slug,
  number,
  title,
  category,
  status,
  image,
  featured = false,
}) {
  return (
    <Link
      to={`/concepts/${slug}`}
      className={`concept-card ${featured ? "concept-card-featured" : ""}`}
    >
      {/* ========================================
          CONCEPT VISUAL
      ======================================== */}
      <div className="concept-card-visual">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="concept-card-placeholder">
            <span>{number}</span>
          </div>
        )}

        <div className={`concept-status concept-status-${status.toLowerCase()}`}>
          {status}
        </div>
      </div>

      {/* ========================================
          CONCEPT INFORMATION
      ======================================== */}
      <div className="concept-card-info">
        <div>
          <p className="concept-card-number">{number}</p>
          <h3>{title}</h3>
        </div>

        <p className="concept-card-category">{category}</p>
      </div>
    </Link>
  );
}

export default ConceptCard;