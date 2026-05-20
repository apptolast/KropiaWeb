import { Signal, Sprout } from 'lucide-react'

import heroDeviceImage from '../assets/hero-device.jpg'
import { StoreBadge } from '../components/ui/StoreBadge'

export function HeroSection() {
  return (
    <section className="hero-section section" id="inicio">
      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <span className="eyebrow">Tecnología agrícola de precisión</span>
          <h1>
            Controla tu invernadero <span>desde el móvil</span>, estés donde estés
          </h1>
          <p>
            Kropia te permite ver la temperatura, humedad y estado de tu invernadero en
            tiempo real. Sin complicaciones.
          </p>
          <div className="hero-section__actions">
            <a className="button" href="#contacto">
              Solicitar información
            </a>
            <StoreBadge />
          </div>
        </div>

        <div className="hero-device" aria-hidden="true">
          <div className="hero-device__plate">
            <img src={heroDeviceImage} alt="" decoding="async" fetchPriority="high" />
          </div>
          <div className="sensor-panel sensor-panel--top">
            <Signal aria-hidden="true" />
            <span>Conectado</span>
          </div>
          <div className="sensor-panel sensor-panel--bottom">
            <Sprout aria-hidden="true" />
            <span>Humedad 72%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
