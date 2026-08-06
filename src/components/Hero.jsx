import { CLINIC } from "../data";
import { PhoneIcon, PinIcon, CheckIcon } from "./Icons";
import clinicFront from "../assets/clinic-front.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="hero__badge">
            <span className="dot"></span> Eye Care &amp; Dental Care · Under One
            Roof
          </span>
          <h1 className="hero__title">
            Clear Vision,
            <br />
            <span>Confident Smiles.</span>
          </h1>
          <p className="hero__lead">
            Welcome to <strong>{CLINIC.fullName}</strong> — bringing advanced
            eye and dental treatment to Achhnera, Agra. Experienced specialists,
            modern equipment, and gentle, affordable care for your whole family.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Book an Appointment
            </a>
            <a
              href={`tel:+91${CLINIC.phonePrimary}`}
              className="btn btn--ghost btn--lg"
            >
              <PhoneIcon className="ic" /> Call {CLINIC.phonePrimary}
            </a>
          </div>
          <ul className="hero__trust">
            <li>
              <CheckIcon className="ic" /> Registered Clinic
            </li>
            <li>
              <CheckIcon className="ic" /> Experienced Specialists
            </li>
            <li>
              <CheckIcon className="ic" /> Affordable Treatment
            </li>
          </ul>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__photo">
            <img
              src={clinicFront}
              alt="Saraswat Eye and Dental Hospital building on Bharatpur Road, Achhnera"
            />
            <span className="hero__photo-tag">
              <PinIcon className="ic" /> Visit us in Achhnera
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
