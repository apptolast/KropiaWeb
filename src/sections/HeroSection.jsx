import { StoreBadge } from '../components/ui/StoreBadge'
import { useI18n } from '../i18n/i18nContext'

export function HeroSection() {
  const { content, routeSectionIds, sectionPath } = useI18n()
  const { hero } = content

  return (
    <section className="hero-section section" id={routeSectionIds.home}>
      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <h1>
            {hero.titlePrefix} <span>{hero.titleHighlight}</span>
            {hero.titleSuffix}
          </h1>
          <p>{hero.text}</p>
          <div className="hero-section__actions">
            <a className="button" href={sectionPath('contact')}>
              {hero.cta}
            </a>
            <StoreBadge />
          </div>
        </div>

        <div className="hero-device" aria-label={hero.screensLabel}>
          <div className="hero-device__screens">
            {hero.screens.map((screen) => (
              <figure className={`hero-device__screen ${screen.className}`} key={screen.alt}>
                <img src={screen.src} alt={screen.alt} decoding="async" fetchPriority="high" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
