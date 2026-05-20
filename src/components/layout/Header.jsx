import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navItems } from '../../data/siteContent'
import { Brand } from '../ui/Brand'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <Brand onClick={closeMenu} />

      <button
        className={`icon-button site-header__toggle ${
          isOpen ? 'site-header__toggle--open' : ''
        }`}
        type="button"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}
        id="site-navigation"
        aria-label="Principal"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="button button--small" href="#contacto" onClick={closeMenu}>
          Solicitar información
        </a>
      </nav>
    </header>
  )
}
