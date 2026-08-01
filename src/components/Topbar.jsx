import { CLINIC } from '../data'
import { PhoneIcon, PinIcon, ClockIcon, WhatsappIcon } from './Icons'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__left">
          <a href={`tel:+91${CLINIC.phonePrimary}`} className="topbar__item">
            <PhoneIcon className="ic" />
            <span>{CLINIC.phonePrimary}</span>
          </a>
          <span className="topbar__item topbar__hide">
            <PinIcon className="ic" />
            <span>Bharatpur Road, Achhnera, Agra</span>
          </span>
        </div>
        <div className="topbar__right">
          <span className="topbar__item topbar__hide">
            <ClockIcon className="ic" />
            <span>{CLINIC.hours}</span>
          </span>
          <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="topbar__item topbar__wa">
            <WhatsappIcon className="ic" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  )
}
