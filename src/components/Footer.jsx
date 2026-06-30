import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Vivien Bui</span>
            <p>
              Creative strategist building campaigns with cultural weight and
              measurable results.
            </p>
            <a href="mailto:phuongvivien@gmail.com" className="footer-email">
              phuongvivien@gmail.com
            </a>
          </div>

          <div className="footer-cols">
            <div className="footer-section">
              <h4>Explore</h4>
              <nav className="footer-nav" aria-label="Footer">
                <a href="#hero">Home</a>
                <a href="#cases">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="footer-links">
                <a href="https://www.linkedin.com/in/vivien-bui" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/vivien.bui" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="tnum">&copy; {currentYear} Vivien Bui</p>
          <a href="#hero" className="footer-top">
            Back to top <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
