import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Vivien Bui</h4>
            <p>Creative Strategist</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <a href="#hero">Home</a>
              <a href="#cases">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Vivien Bui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
