import { FeatureCard } from '../components/cards/FeatureCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { featureCards } from '../data/siteContent'

export function FeaturesSection() {
  return (
    <section className="section features-section" id="funcionalidades">
      <div className="container">
        <SectionHeading title="Qué resuelve Kropia" centered>
          Una plataforma de app, backend y administración pensada para invernaderos
          conectados.
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
