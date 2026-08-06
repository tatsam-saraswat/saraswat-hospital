import { CLINIC } from '../data'
import { WhatsappIcon } from './Icons'

export default function CtaBanner() {
  const waText = encodeURIComponent(
    'Hello, I would like to book an appointment at Saraswat Eye & Dental Hospital.'
  )
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner reveal">
        <div>
          <h2>Ready to care for your eyes and smile?</h2>
          <p>Walk in or book an appointment — we're here to help you see clearly and smile confidently.</p>
        </div>
        <div className="cta-banner__actions">
          <a href="#contact" className="btn btn--white btn--lg">Book Appointment</a>
          <a
            href={`https://wa.me/${CLINIC.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--wa btn--lg"
          >
            <WhatsappIcon className="ic" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
