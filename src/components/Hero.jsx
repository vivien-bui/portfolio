import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-content fade-in-up">
          <p className="hero-eyebrow">Creative strategist · Australia</p>
          <h1>Strategic thinking,<br />cultural impact</h1>
          <p className="hero-subtitle">
            I partner with brands to build campaigns that resonate culturally, drive measurable results, and create moments people actually care about.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value tnum">702M</div>
              <div className="stat-label">Earned impressions</div>
            </div>
            <div className="stat">
              <div className="stat-value tnum">4</div>
              <div className="stat-label">Major campaigns</div>
            </div>
            <div className="stat">
              <div className="stat-value tnum">18.8&times;</div>
              <div className="stat-label">Creative ROI</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#cases" className="cta-button">
              View my work
            </a>
            <a href="#contact" className="text-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
