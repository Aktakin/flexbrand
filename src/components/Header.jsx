import { useState, useEffect } from 'react'
import './Header.css'
import flexLogo from '../images/flex.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#" className="logo">
          <img src={flexLogo} alt="Flexbrand" className="logo-img" />
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-btn" onClick={() => setMenuOpen(false)}>
            Start Project
          </a>
        </nav>

        <button 
          className={`menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}

export default Header
