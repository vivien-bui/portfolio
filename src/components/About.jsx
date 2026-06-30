import './About.css'

export default function About() {
  const expertise = [
    {
      title: 'Strategic planning',
      description: 'Deep insight into market dynamics, consumer behavior, and cultural trends to inform strategy.'
    },
    {
      title: 'Campaign development',
      description: 'Multi-channel campaigns that integrate PR, social, OOH, activations, and digital.'
    },
    {
      title: 'Brand positioning',
      description: 'Building and repositioning brands to achieve relevance and cultural resonance.'
    },
    {
      title: 'Product launches',
      description: 'Go-to-market strategies that create impact and drive adoption.'
    },
    {
      title: 'Cultural insights',
      description: 'Identifying and leveraging cultural moments for brand relevance.'
    },
    {
      title: 'Performance measurement',
      description: 'Measurement frameworks that connect strategy to business results.'
    }
  ]

  return (
    <section id="about" className="about section dark">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <p className="section-eyebrow">About</p>
            <h2>Insight first.<br />Then the work.</h2>
            <p>
              I'm a creative strategist with a track record of building campaigns that drive both cultural impact and measurable business results.
            </p>
            <p>
              My approach starts with insight — a clear read on your market, your audience, and the cultural moments that matter. From there I develop integrated strategies that work across channels, from social-first activations to out-of-home campaigns to live experiences.
            </p>
            <p>
              I've worked with brands across snacks, beverages, and beauty, helping them stand out in crowded categories and build connections that last beyond a single campaign.
            </p>
          </div>

          <div className="expertise">
            <h3 className="expertise-heading">What I do</h3>
            <ul className="expertise-list">
              {expertise.map((item, idx) => (
                <li className="expertise-item" key={idx}>
                  <span className="expertise-num tnum">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
