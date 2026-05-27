import { SectionHeading } from '../components/ui/SectionHeading'
import { productPillars } from '../data/siteContent'

export function TestimonialsSection() {
  return (
    <section className="section product-section">
      <div className="container">
        <SectionHeading title="La plataforma completa" centered>
          La web ya no habla solo de una app: refleja las piezas reales que sostienen el
          proyecto.
        </SectionHeading>

        <div className="product-grid">
          {productPillars.map(({ icon: Icon, title, text }) => (
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
