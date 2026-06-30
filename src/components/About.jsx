import './About.css'

export default function About() {
  const expertise = [
    {
      title: 'Strategic Planning',
      description: 'Deep insight into market dynamics, consumer behavior, and cultural trends to inform strategy.'
    },
    {
      title: 'Campaign Development',
      description: 'Multi-channel campaigns that integrate PR, social, OOH, activations, and digital.'
    },
    {
      title: 'Brand Positioning',
      description: 'Building and repositioning brands to achieve relevance and cultural resonance.'
    },
    {
      title: 'Product Launches',
      description: 'Go-to-market strategies that create impact and drive adoption.'
    },
    {
      title: 'Cultural Insights',
      description: 'Identifying and leveraging cultural moments for brand relevance.'
    },
    {
      title: 'Performance Measurement',
      description: 'Rigorous measurement frameworks that connect strategy to business results.'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I'm a creative strategist with a track record of building campaigns that drive both cultural impact and measurable business results.
            </p>
            <p>
              My approach starts with insights — deep understanding of your market, your audience, and the cultural moments that matter. From there, I develop integrated strategies that work across channels, from social-first activations to out-of-home campaigns to event experiences.
            </p>
            <p>
              I've worked with major brands across categories like snacks, beverages, and beauty, helping them navigate competitive categories and build meaningful connections with their audiences.
            </p>
            <div className="expertise-grid">
              {expertise.map((item, idx) => (
                <div className="expertise-item" key={idx}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
