import { useState } from 'react'
import './About.css'
import doyinImage from '../images/Doyin.jpeg'
import erikaImage from '../images/Erika.jpeg'
import andrewImage from '../images/Andrew.jpeg'
import tonyImage from '../images/Tony.jpeg'

const About = () => {
  const [activeService, setActiveService] = useState(0)
  const values = [
    { title: 'Integrity', desc: 'We do what we say and honor our commitments.' },
    { title: 'Creativity', desc: 'We constantly seek new ways to engage audiences.' },
    { title: 'Execution', desc: 'Ideas only matter if they are delivered flawlessly.' },
    { title: 'People-First', desc: 'We design experiences around real human behavior.' },
    { title: 'Innovation', desc: 'We embrace technology to make campaigns smarter.' },
  ]

  const team = [
    { name: 'Col. Paul U. Omeruo (RTD)', role: 'Chairman', image: null },
    { name: 'Tony Uzoma Emmanuel', role: 'Principal Partner, Business Dev', image: tonyImage },
    { name: 'Doyin Oluwole', role: 'Principal Partner, Creative', image: doyinImage },
    { name: 'Erika Emmanuel', role: 'Non Executive Director', image: erikaImage },
    { name: 'Andrew Akinro', role: 'Project Manager', image: andrewImage },
  ]

  const services = [
    {
      num: '01',
      title: 'Brand Activations',
      full: 'Brand Activations & Product Launch Experiences',
      desc: 'We plan and execute engagements that get people to interact with your product immediately — not the next day.',
      items: ['Market & street activations', 'Campus engagements', 'Retail takeovers', 'Product trials with data capture', 'Community impact activations'],
      outputs: ['Awareness', 'Trial', 'Conversions', 'Content']
    },
    {
      num: '02',
      title: 'Roadshows',
      full: 'Roadshows & Mobile Marketing Tours',
      desc: 'We take your brand directly to the people using structured mobility, trained field teams, and hybrid engagement tools.',
      items: ['Branded roadshow vehicles', 'Multi-city tours', 'Retail penetration drives', 'On-ground sampling + content capture'],
      outputs: ['Reach', 'Consistency', 'Brand presence']
    },
    {
      num: '03',
      title: 'Digital Integration',
      full: 'Digital-Integrated Activations',
      desc: "Modern experiential is interactive, shareable and measurable. You get the feel of 'techy' without unnecessary complexity.",
      items: ['QR-enabled engagement', 'Online voting systems', 'Digital leaderboards', 'UGC campaigns', 'WhatsApp automation', 'Livestream extensions'],
      outputs: ['Data', 'Content', 'Amplification']
    },
    {
      num: '04',
      title: 'Event Marketing',
      full: 'Event Marketing & Branded Experiences',
      desc: 'We produce clean, efficient, well-structured events — in-person, digital, or hybrid.',
      items: ['Launch events', 'Press events', 'Influencer sessions', 'Lifestyle events', 'Conferences with digital layers'],
      outputs: ['Engagement', 'Credibility', 'Visibility']
    },
    {
      num: '05',
      title: 'Retail Marketing',
      full: 'Retail & In-Store Experience Marketing',
      desc: 'We help brands win where buying decisions happen by combining shopper engagement with smart digital triggers.',
      items: ['In-store demos', 'Retail visibility', 'POS experiential setups', 'Data capture microsites', 'Sampling + feedback loops'],
      outputs: ['Trial', 'Preference', 'Sales lift']
    },
    {
      num: '06',
      title: 'Electric Vehicle Growth and Adoption Services',
      full: 'Electric Vehicle Growth and Adoption Services',
      desc: 'Comprehensive services to drive EV market entry, adoption, and growth in emerging markets.',
      items: ['EV Market Entry & Adoption Strategy', 'EV Education, Trust & Behavior Change', 'Experience-Led EV Launches & Trial Programs', 'EV Ecosystem, Partnerships & Stakeholder Engagement', 'EV Demand Generation & Conversion'],
      outputs: ['Market Entry', 'Adoption', 'Trust Building', 'Demand Generation']
    }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Intro */}
        <div className="about-intro reveal">
          <span className="section-label">About</span>
          <div className="about-intro-grid">
            <h2>growth <br /> and <span className="market-black">market</span> <br /> <span className="accent">adoption</span></h2>
            <div className="about-intro-text">
              <p className="large">
                We are a growth and market-adoption agency helping brands scale in emerging markets through culture, experience, and technology with return on investment (ROI) at the core.
              </p>
              <p>
                Established in 2011, Flexbrand has evolved from experiential execution into a strategic partner for brands navigating complex markets where trust, education, infrastructure, and behavior change determine success.
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Philosophy */}
        <div className="about-philosophy reveal">
          <div className="philosophy-block">
            <span className="num">01</span>
            <h3>Where Creativity Meets<br />Practical Technology</h3>
            <p>
              QR-led engagement, real-time feedback tools, mobile-friendly 
              gamification, instant content capture, digital reward systems 
              and clean analytics you can actually use.
            </p>
          </div>
          <div className="philosophy-block">
            <span className="num">02</span>
            <h3>You Don't Need Heavy<br />Tech To Feel Modern</h3>
            <p>
              Some of the best experiences are straightforward. A crowd that's 
              energized. A setup that feels alive. We add technology only where 
              it strengthens the experience.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* Services - Full Width Black Background */}
        <div className="about-services-wrapper">
          <div className="about-services reveal">
            <div className="services-header">
              <span className="section-label">Services</span>
              <h2>What We <span className="accent">Do</span></h2>
            </div>

            <div className="services-grid">
              <div className="services-nav">
                {services.map((s, i) => (
                  <button
                    key={i}
                    className={`service-tab ${activeService === i ? 'active' : ''}`}
                    onClick={() => setActiveService(i)}
                  >
                    <span className="tab-num">{s.num}</span>
                    <span className="tab-title">{s.title}</span>
                    <span className="tab-arrow">→</span>
                  </button>
                ))}
              </div>

              <div className="services-content">
                <div className="service-panel">
                  <h3>{services[activeService].full}</h3>
                  <p className="service-desc">{services[activeService].desc}</p>
                  
                  <div className="service-details">
                    <div className="service-list">
                      <h4>Includes</h4>
                      <ul>
                        {services[activeService].items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-outputs">
                      <h4>Outputs</h4>
                      <div className="output-tags">
                        {services[activeService].outputs.map((o, i) => (
                          <span key={i} className="output-tag">{o}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-cta">
              <div className="cta-content">
                <h3>Ready To Create Something <span className="accent">Memorable?</span></h3>
              </div>
              <a href="#contact" className="btn btn-primary">
                Start A Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Values */}
        <div className="about-values reveal">
          <div className="values-header">
            <span className="section-label">Values</span>
            <h3>Guiding<br />Principles</h3>
          </div>
          <div className="values-list">
            {values.map((v, i) => (
              <div key={i} className="value-item">
                <span className="value-num">0{i + 1}</span>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Vision & Mission */}
        <div className="about-vm reveal">
          <div className="vm-block">
            <span className="section-label">Vision</span>
            <p className="vm-text">
              To be Africa's leading growth and market-adoption agency, recognized for helping brands scale in emerging markets through culture, experience, and technology—with measurable ROI at the core.
            </p>
          </div>
          <div className="vm-block">
            <span className="section-label">Mission</span>
            <p className="vm-text">
              Flexbrand Communications Limited is a growth and market-adoption agency helping brands scale in emerging markets through culture, experience, and technology—with measurable ROI at the core.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* Leadership */}
        <div className="about-team reveal">
          <div className="team-header">
            <span className="section-label">Leadership</span>
            <h3>The<br />Team</h3>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-member">
                <div className="member-avatar">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="member-photo" />
                  ) : (
                    <span className="member-initials">
                      {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  )}
                </div>
                <div className="member-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Our Philosophy */}
        <div className="about-philosophy-new reveal">
          <div className="philosophy-header">
            <span className="section-label">Our Philosophy</span>
            <h3>We work with brands that need to:</h3>
          </div>
          <div className="philosophy-list">
            <div className="philosophy-item">
              <p>Enter or expand into emerging markets</p>
            </div>
            <div className="philosophy-item">
              <p>Drive adoption of new products and technologies</p>
            </div>
            <div className="philosophy-item">
              <p>Build trust in low-certainty environments</p>
            </div>
            <div className="philosophy-item">
              <p>Convert awareness into sustained demand.</p>
            </div>
          </div>
          <p className="philosophy-note">
            Our work spans mobility (EVs), Automobile, Medical Services, technology, healthcare, and consumer brands, delivering growth through insight-led strategy and experience-driven execution.
          </p>
        </div>

        <div className="divider" />

        {/* How We Create Value */}
        <div className="about-value-creation reveal">
          <div className="value-creation-header">
            <span className="section-label">How We Create Value</span>
            <h3>Flexbrand operates at the intersection of:</h3>
          </div>
          <div className="value-creation-grid">
            <div className="value-creation-item">
              <h4>Market Strategy</h4>
              <p>Understanding adoption barriers and opportunity gaps</p>
            </div>
            <div className="value-creation-item">
              <h4>Culture & Experience</h4>
              <p>Translating innovation into real-world relevance</p>
            </div>
            <div className="value-creation-item">
              <h4>Ecosystem Building</h4>
              <p>Partnerships, stakeholders, and communities</p>
            </div>
            <div className="value-creation-item">
              <h4>Demand & Conversion</h4>
              <p>Moving audiences from interest to revenue</p>
            </div>
          </div>
          <p className="value-creation-note">
            We don't just create visibility, we create market movement.
          </p>
        </div>

        <div className="divider" />

        {/* Our Point of View */}
        <div className="about-pov reveal">
          <div className="pov-header">
            <span className="section-label">Our Point of View</span>
          </div>
          <div className="pov-content">
            <p className="pov-text">
              In emerging markets, growth doesn't come from advertising alone.
              It comes from education, trust, access, and participation.
              Flexbrand exists to help brands win where traditional playbooks fail.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
