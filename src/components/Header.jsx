import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <a href="#home" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">Vivien Bui</span>
            <span className="logo-subtitle">Creative Strategist</span>
          </a>
        </div>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <button
            className="nav-link"
            onClick={() => scrollToSection('cases')}
          >
            Work
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
