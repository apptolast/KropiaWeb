import { SectionHeading } from '../components/ui/SectionHeading'
import { processSteps } from '../data/siteContent'

export function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container process-section__grid">
        <SectionHeading title="Cómo funciona Kropia">
          Un proceso sencillo pensado para que usted solo se preocupe de lo importante: su cosecha.
        </SectionHeading>

        <div className="process-list">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
