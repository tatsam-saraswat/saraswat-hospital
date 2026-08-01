import { EYE_SERVICES, DENTAL_SERVICES } from '../data'
import { EyeIcon, ToothIcon } from './Icons'

function ServiceCard({ variant, icon: Icon, title, subtitle, items }) {
  return (
    <article className={`svc-card svc-card--${variant} reveal`}>
      <header className="svc-card__head">
        <span className="svc-card__badge"><Icon /></span>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </header>
      <ul className="svc-list">
        {items.map((s) => (
          <li key={s.title}>
            <strong>{s.title}</strong>
            <span>{s.text}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our Services</span>
          <h2>Everything Your Eyes &amp; Smile Need</h2>
          <p>From routine check-ups to advanced surgery, we offer a full range of eye and dental treatments under one roof.</p>
        </div>

        <div className="services__cols">
          <ServiceCard
            variant="eye"
            icon={EyeIcon}
            title="Eye Care"
            subtitle="Comprehensive vision care and eye surgery"
            items={EYE_SERVICES}
          />
          <ServiceCard
            variant="dental"
            icon={ToothIcon}
            title="Dental Care"
            subtitle="Complete dental & facial treatment"
            items={DENTAL_SERVICES}
          />
        </div>

        <p className="services__note reveal">
          Not sure which treatment you need? <a href="#contact">Book a consultation</a> and our specialists will guide you.
        </p>
      </div>
    </section>
  )
}
