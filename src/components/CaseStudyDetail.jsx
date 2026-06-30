import { useEffect } from 'react'
import './CaseStudyDetail.css'

export default function CaseStudyDetail({ caseStudy, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [caseStudy.id])

  return (
    <section className="case-detail">
      <div
        className="case-detail-hero"
        style={{ '--case-color': caseStudy.color }}
      >
        <img
          className="case-hero-image"
          src={`https://picsum.photos/seed/${caseStudy.id}/1920/1080`}
          alt=""
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="container">
          <button className="back-button" onClick={onBack}>
            <span aria-hidden="true">&larr;</span> Back to work
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
            <h2>The problem</h2>
            <p>{caseStudy.problem}</p>
          </div>

          <div className="case-section">
            <h2>The challenge</h2>
            <p>{caseStudy.challenge}</p>
          </div>

          <div className="case-section">
            <h2>Our approach</h2>
            <p>{caseStudy.approach}</p>
          </div>

          <div className="case-section">
            <h2>Strategic initiatives</h2>
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
                  <div className="result-value tnum">{value}</div>
                  <div className="result-label">{key}</div>
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
            <h2>Interested in working together?</h2>
            <div className="case-cta-actions">
              <a href="#contact" className="cta-button" onClick={onBack}>
                Let's talk
              </a>
              <button className="text-link" onClick={onBack}>
                <span aria-hidden="true">&larr;</span> Back to all work
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
