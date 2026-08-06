import clinicFront from '../assets/clinic-front.jpg'
import eyeExam from '../assets/eye-exam.jpg'
import dentalCare from '../assets/dental-care.jpg'

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Our Clinic</span>
          <h2>A Look Inside</h2>
          <p>Modern equipment and a comfortable, hygienic space for every patient.</p>
        </div>
        <div className="gallery__grid">
          <figure className="gallery__item gallery__item--wide reveal">
            <img src={clinicFront} alt="Front view of Saraswat Eye and Dental Hospital" />
            <figcaption>Our clinic on Bharatpur Road, Achhnera</figcaption>
          </figure>
          <figure className="gallery__item reveal">
            <img src={eyeExam} alt="Slit-lamp eye examination in progress" />
            <figcaption>Detailed eye examination</figcaption>
          </figure>
          <figure className="gallery__item reveal">
            <img src={dentalCare} alt="Dental treatment in progress" />
            <figcaption>Gentle dental treatment</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
