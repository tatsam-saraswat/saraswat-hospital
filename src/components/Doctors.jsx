import { DOCTORS } from '../data'
import { PhoneIcon } from './Icons'

export default function Doctors() {
  return (
    <section className="section doctors" id="doctors">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our Specialists</span>
          <h2>Meet the Doctors</h2>
          <p>Experienced, caring specialists dedicated to your eyes and your smile.</p>
        </div>

        <div className="doctors__grid">
          {DOCTORS.map((doc) => (
            <article className="doc-card reveal" key={doc.name}>
              <div className={`doc-card__avatar${doc.alt ? ' doc-card__avatar--alt' : ''}`} aria-hidden="true">
                {doc.initials}
              </div>
              <h3>{doc.name}</h3>
              <p className="doc-card__role">{doc.role}</p>
              <ul className="doc-card__cred">
                {doc.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <a href={`tel:+91${doc.phone}`} className="doc-card__phone">
                <PhoneIcon className="ic" /> {doc.phone}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
