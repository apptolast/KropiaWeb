import { FeatureCard } from '../components/cards/FeatureCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useI18n } from '../i18n/i18nContext'

export function FeaturesSection() {
  const { content, routeSectionIds } = useI18n()

  return (
    <section className="section features-section" id={routeSectionIds.features}>
      <div className="container">
        <SectionHeading title={content.features.title} centered>
          {content.features.text}
        </SectionHeading>

        <div className="feature-grid">
          {content.features.cards.map((card) => (
            <FeatureCard imageAlt={content.features.imageAlt} key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
