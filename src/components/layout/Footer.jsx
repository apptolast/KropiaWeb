import { navItems } from '../../data/siteContent'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Brand label="Kropia" />
          <p>Revolucionando el campo a través de tecnología inteligente y compromiso real.</p>
        </div>
        <div>
          <h2>Navegación</h2>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>Legal</h2>
          <a href="#contacto">Privacidad</a>
          <a href="#contacto">Aviso legal</a>
          <a href="#contacto">Cookies</a>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>Calle Tecnológica 42, 04001 Almería, España</p>
          <a href="mailto:info@kropia.es">info@kropia.es</a>
        </div>
      </div>
      <p className="site-footer__copy">© 2026 Kropia by AppToLast. Todos los derechos reservados.</p>
    </footer>
  )
}
