import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you soon.')
    setForm({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="section-label">Contact</span>
            <h2>Let's<br /><span className="accent">Talk</span></h2>
            
            <p className="contact-lead">
              If you want an agency that understands people, culture, 
              experience, and digital behaviour — let's talk.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="item-label">Address</span>
                <p>The Creative Hub, Plot 7 & 8<br />Madam Cellular Street, Ajiran,<br />Lekki, Lagos</p>
              </div>
              <div className="contact-item">
                <span className="item-label">Email</span>
                <a href="mailto:info@flexbrandcomms.com">info@flexbrandcomms.com</a>
              </div>
              <div className="contact-item">
                <span className="item-label">Phone</span>
                <a href="tel:+2348089883268">0808 988 3268</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label>Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={e => setForm({...form, company: e.target.value})}
                  placeholder="Company name"
                />
              </div>
              
              <div className="form-field">
                <label>Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
