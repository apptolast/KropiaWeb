import { PriceCard } from '../components/cards/PriceCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { pricingPlans } from '../data/siteContent'

export function PricingSection() {
  return (
    <section className="section pricing-section" id="precios">
      <div className="container">
        <SectionHeading title="Planes adaptados a su medida" centered>
          Elija la potencia de control que su explotación necesita.
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
