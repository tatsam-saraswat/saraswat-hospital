import { CheckIcon } from './Icons'
import drDevendra from '../assets/dr-devendra.jpg'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media reveal">
          <img src={drDevendra} alt="Dr. Devendra Saraswat at the eye examination unit" />
          <div className="about__badge">
            <strong>25+</strong>
            <span>Years of<br />Caring Service</span>
          </div>
        </div>
        <div className="about__content reveal">
          <span className="eyebrow">About Us</span>
          <h2>Trusted Eye &amp; Dental Care for Achhnera</h2>
          <p>
            Saraswat Eye &amp; Dental Hospital was started with one simple goal — to bring
            good-quality eye and dental treatment closer to the families of Achhnera and the
            surrounding areas, so no one has to travel far for reliable care.
          </p>
          <p>
            Led by <strong>Dr. Devendra Saraswat</strong> and <strong>Dr. Poonam Saraswat</strong>,
            our clinic combines years of clinical experience with modern equipment. From your first
            eye check-up to advanced dental procedures, we take the time to explain your treatment
            and make you comfortable at every step.
          </p>
          <ul className="about__points">
            <li><CheckIcon className="ic" /> Both eye &amp; dental treatment in one place</li>
            <li><CheckIcon className="ic" /> Clean, hygienic and friendly environment</li>
            <li><CheckIcon className="ic" /> Honest advice and transparent pricing</li>
          </ul>
          <a href="#doctors" className="btn btn--primary">Meet Our Doctors</a>
        </div>
      </div>
    </section>
  )
}
