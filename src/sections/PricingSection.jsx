import { PriceCard } from '../components/cards/PriceCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { pricingPlans } from '../data/siteContent'

export function PricingSection() {
  return (
    <section className="section pricing-section" id="implantacion">
      <div className="container">
        <SectionHeading title="Implantación por fases" centered>
          Cada invernadero parte de un estado distinto. Por eso planteamos el alcance
          técnico antes de cerrar una propuesta.
        </SectionHeading>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
