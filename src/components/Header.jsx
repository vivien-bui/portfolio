import { useState, useEffect } from 'react'
import './Header.css'

const SECTIONS = [
  { id: 'cases', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', ...SECTIONS.map((s) => s.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <a href="#hero" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">Vivien Bui</span>
            <span className="logo-subtitle">Creative strategist</span>
          </a>
        </div>

        <nav className={`nav ${isOpen ? 'open' : ''}`} aria-label="Primary">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`nav-link ${active === s.id ? 'is-active' : ''}`}
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => scrollToSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
