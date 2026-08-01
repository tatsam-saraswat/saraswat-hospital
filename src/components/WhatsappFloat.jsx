import { CLINIC } from '../data'
import { WhatsappIcon } from './Icons'

export default function WhatsappFloat() {
  const text = encodeURIComponent('Hello, I would like to book an appointment.')
  return (
    <a
      href={`https://wa.me/${CLINIC.whatsapp}?text=${text}`}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon />
    </a>
  )
}
