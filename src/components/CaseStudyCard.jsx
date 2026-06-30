import './CaseStudyCard.css'

export default function CaseStudyCard({ caseStudy, onClick }) {
  return (
    <article className="case-card fade-in-up" onClick={onClick}>
      <div className="case-card-image" style={{ backgroundColor: caseStudy.color }}>
        <div className="image-placeholder">
          <span className="brand-name">{caseStudy.title}</span>
        </div>
      </div>
      <div className="case-card-content">
        <span className="case-category">{caseStudy.category}</span>
        <h3>{caseStudy.title}</h3>
        <p className="case-subtitle">{caseStudy.subtitle}</p>
        <div className="case-highlight">
          <span className="highlight-label">Key Result</span>
          <span className="highlight-value">
            {caseStudy.keyMetrics[0].value}
          </span>
        </div>
        <button className="case-link">
          Read Case Study <span>→</span>
        </button>
      </div>
    </article>
  )
}
