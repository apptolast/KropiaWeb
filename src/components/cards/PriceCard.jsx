import { CheckCircle2 } from 'lucide-react'

export function PriceCard({ plan }) {
  return (
    <article className={`price-card ${plan.highlighted ? 'price-card--highlighted' : ''}`}>
      {plan.highlighted && <span className="badge">Recomendado</span>}
      <p className="price-card__eyebrow">{plan.eyebrow}</p>
      <h3>{plan.title}</h3>
      <p className="price-card__description">{plan.description}</p>
      <div className="price-card__price">
        <strong>{plan.price}</strong>
        <span>{plan.monthly}</span>
      </div>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <CheckCircle2 aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <a className="button button--ghost" href="#contacto">
        Pedir presupuesto
      </a>
    </article>
  )
}
