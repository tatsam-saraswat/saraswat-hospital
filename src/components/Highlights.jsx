import { HIGHLIGHTS } from '../data'
import { HIGHLIGHT_ICONS } from './Icons'

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container highlights__grid">
        {HIGHLIGHTS.map((item) => {
          const Icon = HIGHLIGHT_ICONS[item.icon]
          return (
            <div className="highlight reveal" key={item.title}>
              <div className="highlight__icon"><Icon /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
