import './About.css'
import doyinImage from '../images/Doyin.jpeg'
import erikaImage from '../images/Erika.jpeg'
import andrewImage from '../images/Andrew.jpeg'
import tonyImage from '../images/Tony.jpeg'

const About = () => {
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
    { name: 'Erika Emmanuel', role: 'Director, Client Service', image: erikaImage },
    { name: 'Andrew', role: 'Project Manager', image: andrewImage },
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Intro */}
        <div className="about-intro reveal">
          <span className="section-label">About</span>
          <div className="about-intro-grid">
            <h2>Hybrid<br /><span className="accent">Experiential</span><br />Marketing</h2>
            <div className="about-intro-text">
              <p className="large">
                Flexbrand Communications is a hybrid experiential marketing 
                agency that blends physical experiences with smart digital 
                touchpoints to help brands connect with real people.
              </p>
              <p>
                Since 2011, we've delivered engaging, measurable, and shareable 
                brand experiences across Nigeria and beyond. We don't throw around 
                buzzwords — we focus on simple, meaningful tech that makes your 
                activation better.
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
              To be Africa's leading experiential agency, recognized for creating 
              hybrid brand experiences that blend real-world engagement with 
              digital innovation.
            </p>
          </div>
          <div className="vm-block">
            <span className="section-label">Mission</span>
            <p className="vm-text">
              We create engaging, hybrid brand experiences that connect audiences, 
              amplify brand stories, and deliver measurable results for our clients.
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
      </div>
    </section>
  )
}

export default About
