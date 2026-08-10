import "../styles/ConceptCard.css";

function ConceptCard({
  number,
  title,
  category,
  status,
  image,
  featured = false,
}) {
  return (
    <article className={`concept-card ${featured ? "concept-card-featured" : ""}`}>
      {/* Concept Visual */}
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

      {/* Concept Information */}
      <div className="concept-card-info">
        <div>
          <p className="concept-card-number">{number}</p>
          <h3>{title}</h3>
        </div>

        <p className="concept-card-category">{category}</p>
      </div>
    </article>
  );
}

export default ConceptCard;