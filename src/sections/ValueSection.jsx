import { ValueCard } from '../components/cards/ValueCard'
import { valueCards } from '../data/siteContent'

export function ValueSection() {
  return (
    <section className="section value-section" aria-labelledby="valor-title">
      <div className="container">
        <h2 className="sr-only" id="valor-title">
          Beneficios principales
        </h2>
        <div className="value-grid">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
