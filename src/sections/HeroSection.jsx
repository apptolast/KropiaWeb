import appScreenGreenhouse from '../assets/app-screen-04.png'
import appScreenList from '../assets/app-screen-03.png'
import appScreenTemperature from '../assets/app-screen-05.png'
import { StoreBadge } from '../components/ui/StoreBadge'

const heroScreens = [
  {
    className: 'hero-device__screen--left',
    src: appScreenList,
    alt: 'Listado de invernaderos en la app Kropia',
  },
  {
    className: 'hero-device__screen--primary',
    src: appScreenGreenhouse,
    alt: 'Panel de sensores del invernadero en la app Kropia',
  },
  {
    className: 'hero-device__screen--right',
    src: appScreenTemperature,
    alt: 'Grafica de temperatura historica en la app Kropia',
  },
]

export function HeroSection() {
  return (
    <section className="hero-section section" id="inicio">
      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <h1>
            Controla tu invernadero <span>desde el móvil</span>, estés donde estés
          </h1>
          <p>
            Monitoriza sensores, sectores, alertas, riego y consignas desde una app
            conectada en tiempo real al backend de tu invernadero.
          </p>
          <div className="hero-section__actions">
            <a className="button" href="#contacto">
              Solicitar información
            </a>
            <StoreBadge />
          </div>
        </div>

        <div className="hero-device" aria-label="Capturas reales de la app Kropia">
          <div className="hero-device__screens">
            {heroScreens.map((screen) => (
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
