import { SectionHeading } from '../components/ui/SectionHeading'
import { useI18n } from '../i18n/i18nContext'

export function ProcessSection() {
  const { content } = useI18n()

  return (
    <section className="section process-section">
      <div className="container process-section__grid">
        <SectionHeading title={content.process.title}>{content.process.text}</SectionHeading>

        <div className="process-list">
          {content.process.steps.map((step, index) => (
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
