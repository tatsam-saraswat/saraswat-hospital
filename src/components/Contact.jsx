import { useState } from 'react'
import { CLINIC } from '../data'
import { PinIcon, PhoneIcon, ClockIcon, WhatsappIcon } from './Icons'

const INITIAL = { name: '', phone: '', dept: 'Eye Care', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [note, setNote] = useState({
    text: 'Your details open in WhatsApp so you can send them to us directly. No account or payment needed.',
    success: false,
  })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      e.target.reportValidity()
      return
    }

    const lines = [
      'Hello Saraswat Eye & Dental Hospital,',
      'I would like to book an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Department: ${form.dept}`,
    ]
    if (form.message.trim()) lines.push(`Details: ${form.message.trim()}`)

    const url = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener')

    setNote({
      text: `Thank you, ${form.name || 'there'}! WhatsApp is opening so you can send us your request.`,
      success: true,
    })
    setForm(INITIAL)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2>Book Your Appointment</h2>
          <p>Send us your details and we'll confirm your visit — or reach us instantly on WhatsApp.</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <ul className="contact__list">
              <li>
                <span className="contact__ic"><PinIcon /></span>
                <div>
                  <strong>Visit Us</strong>
                  <p>{CLINIC.addressLine1}<br />{CLINIC.addressLine2}</p>
                </div>
              </li>
              <li>
                <span className="contact__ic"><PhoneIcon /></span>
                <div>
                  <strong>Call Us</strong>
                  <p>
                    <a href={`tel:+91${CLINIC.phonePrimary}`}>{CLINIC.phonePrimary}</a> ·{' '}
                    <a href={`tel:+91${CLINIC.phoneSecondary}`}>{CLINIC.phoneSecondary}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__ic"><ClockIcon /></span>
                <div>
                  <strong>Opening Hours</strong>
                  <p>Open all week: 9am - 7pm</p>
                </div>
              </li>
            </ul>
            <div className="contact__map">
              <iframe
                title="Map to Saraswat Eye and Dental Hospital, Achhnera"
                src="https://maps.google.com/maps?q=Achhnera%2C%20Agra%2C%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={update} required />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="10-digit mobile number"
                  pattern="[0-9+\-\s]{7,15}"
                  value={form.phone}
                  onChange={update}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="dept">Department</label>
                <select id="dept" name="dept" value={form.dept} onChange={update}>
                  <option value="Eye Care">Eye Care</option>
                  <option value="Dental Care">Dental Care</option>
                  <option value="Not sure">Not sure / Both</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us briefly about your problem or preferred day/time"
                value={form.message}
                onChange={update}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              <WhatsappIcon className="ic" /> Send via WhatsApp
            </button>
            <p className={`contact__form-note${note.success ? ' is-success' : ''}`} role="status">
              {note.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
