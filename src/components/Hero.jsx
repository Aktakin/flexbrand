import './Hero.css'
import heroBg from '../images/flexbrand1.jpg'

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">growth<br />and market<br />adoption</p>
          
          <h1 className="hero-title">
            Brand<br />
            <span className="accent">Moments</span><br />
            Into Real<br />
            Experiences
          </h1>
          
          <div className="hero-bottom">
            <p className="hero-desc">
              We design experiences that spark emotion, 
              create lasting impressions, and give your 
              audience something worth talking about.
            </p>
            
            <div className="hero-cta">
              <a href="#services" className="btn btn-primary">
                View Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">14+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">Campaigns</span>
          </div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-bar"><div className="scroll-progress" /></div>
      </div>
    </section>
  )
}

export default Hero
