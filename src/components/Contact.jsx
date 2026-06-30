import { useState } from 'react'
import './Contact.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | sent

  const validate = (values) => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = 'That email address doesn’t look right.'
    }
    if (!values.subject.trim()) next.subject = 'Let me know what this is about.'
    if (!values.message.trim()) {
      next.message = 'Please add a short message.'
    } else if (values.message.trim().length < 10) {
      next.message = 'A little more detail helps — at least 10 characters.'
    }
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(formState)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const first = document.getElementById(Object.keys(nextErrors)[0])
      if (first) first.focus()
      return
    }
    setStatus('submitting')
    // Simulated submission — wire to a real endpoint when available.
    setTimeout(() => {
      setStatus('sent')
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 700)
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: formState[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined
  })

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header fade-in-up">
            <p className="section-eyebrow">Contact</p>
            <h2>Let's work together</h2>
            <p>Have a project in mind? Tell me a little about it and I'll be in touch.</p>
          </div>

          <div className="contact-content">
            {status === 'sent' ? (
              <div className="form-success fade-in" role="status">
                <div className="form-success-mark" aria-hidden="true">&#10003;</div>
                <h3>Message sent</h3>
                <p>
                  Thanks for reaching out. I'll get back to you within two
                  business days.
                </p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setStatus('idle')}
                >
                  Send another <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            ) : (
              <form className="contact-form fade-in-up" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input type="text" {...fieldProps('name')} placeholder="Aanya Sharma" />
                  {errors.name && (
                    <span className="field-error" id="name-error">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" {...fieldProps('email')} placeholder="aanya@studio.co" />
                  {errors.email && (
                    <span className="field-error" id="email-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" {...fieldProps('subject')} placeholder="Campaign for a Q3 launch" />
                  {errors.subject && (
                    <span className="field-error" id="subject-error">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea {...fieldProps('message')} rows="6" placeholder="A few lines about the brand, the goal, and your timing." />
                  {errors.message && (
                    <span className="field-error" id="message-error">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}

            <aside className="contact-info fade-in-up">
              <div className="info-block">
                <h3>Email</h3>
                <p>
                  <a href="mailto:phuongvivien@gmail.com">phuongvivien@gmail.com</a>
                </p>
              </div>

              <div className="info-block">
                <h3>Social</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/vivien-bui" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.instagram.com/vivien.bui" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </div>

              <div className="info-block">
                <h3>Based in</h3>
                <p>Sydney, Australia</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
