import { CLINIC } from '../data'
import { BrandMark } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <a href="#home" className="brand brand--light">
            <span className="brand__mark" aria-hidden="true">
              <BrandMark size={40} solid />
            </span>
            <span className="brand__text">
              <strong>{CLINIC.name}</strong>
              <small>{CLINIC.tagline}</small>
            </span>
          </a>
          <p>Advanced eye and dental care for the families of Achhnera and nearby areas — clear vision and confident smiles, close to home.</p>
          <p className="footer__reg">Reg. No. {CLINIC.regNo}</p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#doctors">Our Doctors</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">Cataract Surgery</a></li>
            <li><a href="#services">Contact Lenses</a></li>
            <li><a href="#services">Root Canal</a></li>
            <li><a href="#services">Dental Implants</a></li>
            <li><a href="#services">Braces</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>Bharatpur Road, Achhnera, Agra, UP</li>
            <li><a href={`tel:+91${CLINIC.phonePrimary}`}>{CLINIC.phonePrimary}</a></li>
            <li><a href={`tel:+91${CLINIC.phoneSecondary}`}>{CLINIC.phoneSecondary}</a></li>
            <li>{CLINIC.hours}</li>
          </ul>
          <a href={`https://wa.me/${CLINIC.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--sm">
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} {CLINIC.fullName}. All rights reserved.</p>
          <p>Made with care for healthier eyes &amp; smiles.</p>
        </div>
      </div>
    </footer>
  )
}
