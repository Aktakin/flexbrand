import { useState } from 'react'
import './Services.css'

const Services = () => {
  const [active, setActive] = useState(0)

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
    }
  ]

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">Services</span>
          <h2>What We <span className="accent">Do</span></h2>
        </div>

        <div className="services-grid">
          <div className="services-nav reveal">
            {services.map((s, i) => (
              <button
                key={i}
                className={`service-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-num">{s.num}</span>
                <span className="tab-title">{s.title}</span>
                <span className="tab-arrow">→</span>
              </button>
            ))}
          </div>

          <div className="services-content reveal">
            <div className="service-panel">
              <h3>{services[active].full}</h3>
              <p className="service-desc">{services[active].desc}</p>
              
              <div className="service-details">
                <div className="service-list">
                  <h4>Includes</h4>
                  <ul>
                    {services[active].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-outputs">
                  <h4>Outputs</h4>
                  <div className="output-tags">
                    {services[active].outputs.map((o, i) => (
                      <span key={i} className="output-tag">{o}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-cta reveal">
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
    </section>
  )
}

export default Services
