import { FeatureCard } from '../components/cards/FeatureCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { featureCards } from '../data/siteContent'

export function FeaturesSection() {
  return (
    <section className="section features-section" id="funcionalidades">
      <div className="container">
        <SectionHeading title="Todo lo que necesitas" centered>
          Tecnología de última generación adaptada a la sencillez del campo.
        </SectionHeading>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
