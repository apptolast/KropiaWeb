import { SectionHeading } from '../components/ui/SectionHeading'
import { useI18n } from '../i18n/i18nContext'

export function TestimonialsSection() {
  const { content } = useI18n()

  return (
    <section className="section product-section">
      <div className="container">
        <SectionHeading title={content.platform.title} centered>
          {content.platform.text}
        </SectionHeading>

        <div className="product-grid">
          {content.platform.pillars.map(({ icon: Icon, title, text }) => (
            <article className="product-pillar" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
