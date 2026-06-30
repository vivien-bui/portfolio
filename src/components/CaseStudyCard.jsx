import './CaseStudyCard.css'

export default function CaseStudyCard({ caseStudy, index, variant = 'standard', onClick }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      className={`case-card ${variant}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`Read case study: ${caseStudy.title}`}
    >
      <div
        className="case-card-image"
        style={{ '--case-color': caseStudy.color }}
      >
        <img
          src={`https://picsum.photos/seed/${caseStudy.id}/900/600`}
          alt={`${caseStudy.title} campaign visual`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className="case-number tnum">{number}</span>
        <span className="brand-name">{caseStudy.title}</span>
      </div>
      <div className="case-card-content">
        <span className="case-category">{caseStudy.category}</span>
        <h3>{caseStudy.title}</h3>
        <p className="case-subtitle">{caseStudy.subtitle}</p>
        <div className="case-footer">
          <div className="case-highlight">
            <span className="highlight-label">{caseStudy.keyMetrics[0].label}</span>
            <span className="highlight-value tnum">{caseStudy.keyMetrics[0].value}</span>
          </div>
          <span className="case-link">
            Read case study <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </article>
  )
}
