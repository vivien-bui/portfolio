import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log('Form submitted:', formState)
    // Reset form
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header fade-in-up">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? I'd love to hear about it.</p>
          </div>

          <div className="contact-content">
            <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>

            <div className="contact-info fade-in-up">
              <div className="info-block">
                <h3>Email</h3>
                <p>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </p>
              </div>

              <div className="info-block">
                <h3>Social</h3>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>

              <div className="info-block">
                <h3>Based In</h3>
                <p>Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
