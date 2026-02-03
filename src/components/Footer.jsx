import './Footer.css'
import flexLogo from '../images/flex.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={flexLogo} alt="Flexbrand" className="logo-img" />
            </a>
            <p>Turning brand moments into real experiences since 2011.</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#clients">Clients</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">Brand Activations</a>
              <a href="#services">Roadshows</a>
              <a href="#services">Digital Integration</a>
              <a href="#services">Event Marketing</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:info@flexbrandcomms.com">info@flexbrandcomms.com</a>
              <a href="tel:+2348089883268">+234 808 988 3268</a>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Flexbrand Communications Limited</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
