import './Clients.css'

// Import client logos
import promasidor from '../images/promasidor.jpg'
import closet from '../images/closet one2one drycleaners.jpg'
import leadway from '../images/leadway pensure pfa.jpg'
import hotfm from '../images/hotfm 93.3.jpg'
import bedmate from '../images/bedmate furnitures.jpg'
import vitel from '../images/vitel wireless.jpg'
import nihotour from '../images/nihotour.jpg'

const Clients = () => {
  const clients = [
    { name: 'Promasidor', logo: promasidor },
    { name: 'Closet One2One Drycleaners', logo: closet },
    { name: 'Leadway Pensure PFA', logo: leadway },
    { name: 'HotFM 93.3', logo: hotfm },
    { name: 'Bedmate Furnitures', logo: bedmate },
    { name: 'Vitel Wireless', logo: vitel },
    { name: 'NIHOTOUR', logo: nihotour },
  ]

  const industries = ['FMCG', 'Finance', 'Lifestyle', 'Media', 'Tourism', 'Technology']

  return (
    <section className="clients section" id="clients">
      <div className="container">
        <div className="clients-header reveal">
          <span className="section-label">Clients</span>
          <h2>Brands That<br /><span className="accent">Trust Us</span></h2>
        </div>

        <div className="clients-industries reveal">
          {industries.map((ind, i) => (
            <span key={i} className="industry">{ind}</span>
          ))}
        </div>

        <div className="clients-logos reveal">
          {clients.map((client, i) => (
            <div key={i} className="client-logo-card">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
          <div className="client-logo-card client-more">
            <span className="more-num">+50</span>
            <span className="more-text">More Partners</span>
          </div>
        </div>

        <div className="divider" />

        <div className="clients-stats reveal">
          <div className="stats-text">
            <p className="stats-lead">
              Our long-term relationships with these brands reflect our 
              commitment, reliability, and ability to create experiences 
              that matter.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-block">
              <span className="stat-value">14+</span>
              <span className="stat-name">Years Active</span>
            </div>
            <div className="stat-block">
              <span className="stat-value">200+</span>
              <span className="stat-name">Campaigns</span>
            </div>
            <div className="stat-block">
              <span className="stat-value">10M+</span>
              <span className="stat-name">People Reached</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
