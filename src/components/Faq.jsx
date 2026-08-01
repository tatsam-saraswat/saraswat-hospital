import { FAQS } from '../data'

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions. Still unsure? <a href="#contact">Contact us</a> — we're happy to help.</p>
        </div>
        <div className="faq__list reveal">
          {FAQS.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
