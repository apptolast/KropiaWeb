import { ValueCard } from '../components/cards/ValueCard'
import { useI18n } from '../i18n/i18nContext'

export function ValueSection() {
  const { content, routeSectionIds } = useI18n()

  return (
    <section className="section value-section" aria-labelledby={routeSectionIds.value}>
      <div className="container">
        <h2 className="sr-only" id={routeSectionIds.value}>
          {content.value.title}
        </h2>
        <div className="value-grid">
          {content.value.cards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
