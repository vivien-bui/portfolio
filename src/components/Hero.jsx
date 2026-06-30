import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1>Strategic Thinking,<br />Cultural Impact</h1>
          <p className="hero-subtitle">
            I partner with brands to build campaigns that resonate culturally, drive measurable results, and create moments people actually care about.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">702M</div>
              <div className="stat-label">Earned Impressions</div>
            </div>
            <div className="stat">
              <div className="stat-value">4</div>
              <div className="stat-label">Major Campaigns</div>
            </div>
            <div className="stat">
              <div className="stat-value">18.8x</div>
              <div className="stat-label">Creative ROI</div>
            </div>
          </div>
          <a href="#cases" className="cta-button">
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
