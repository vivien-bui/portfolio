import './CaseStudyDetail.css'

export default function CaseStudyDetail({ caseStudy, onBack }) {
  return (
    <section className="case-detail">
      <div className="case-detail-hero" style={{ backgroundColor: caseStudy.color }}>
        <div className="container">
          <button className="back-button" onClick={onBack}>
            ← Back to Work
          </button>
          <div className="case-hero-content fade-in-up">
            <span className="case-category">{caseStudy.category}</span>
            <h1>{caseStudy.title}</h1>
            <p className="case-hero-subtitle">{caseStudy.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <article className="case-body">
          <div className="case-section">
            <h2>The Problem</h2>
            <p>{caseStudy.problem}</p>
          </div>

          <div className="case-section">
            <h2>The Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </div>

          <div className="case-section">
            <h2>Our Approach</h2>
            <p>{caseStudy.approach}</p>
          </div>

          <div className="case-section">
            <h2>Strategic Initiatives</h2>
            <ul className="strategy-list">
              {caseStudy.strategy.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-results">
            <h2>Results</h2>
            <div className="results-grid">
              {Object.entries(caseStudy.results).map(([key, value]) => (
                <div className="result-item" key={key}>
                  <div className="result-label">{key}</div>
                  <div className="result-value">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="case-section">
            <h2>Deliverables</h2>
            <div className="deliverables">
              {caseStudy.deliverables.map((item, idx) => (
                <div className="deliverable-badge" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="case-cta">
            <p>Interested in working together?</p>
            <a href="#contact" className="cta-button">
              Let's Talk
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
