import { navItems } from '../../data/siteContent'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Brand label="Kropia" />
          <p>Monitorización, control e histórico para invernaderos conectados.</p>
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
          <a href="mailto:admin@apptolast.com">admin@apptolast.com</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p className="site-footer__copy">© 2026 Kropia by AppToLast. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
