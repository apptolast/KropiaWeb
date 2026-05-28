import { PriceCard } from '../components/cards/PriceCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useI18n } from '../i18n/i18nContext'

export function PricingSection() {
  const { content, routeSectionIds, sectionPath } = useI18n()

  return (
    <section className="section pricing-section" id={routeSectionIds.implementation}>
      <div className="container">
        <SectionHeading title={content.pricing.title} centered>
          {content.pricing.text}
        </SectionHeading>

        <div className="pricing-grid">
          {content.pricing.plans.map((plan) => (
            <PriceCard
              contactHref={sectionPath('contact')}
              key={plan.title}
              labels={content.pricing}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
