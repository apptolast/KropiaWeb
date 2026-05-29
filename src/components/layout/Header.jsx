import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { useI18n } from '../../i18n/i18nContext'
import { Brand } from '../ui/Brand'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { content, sectionPath } = useI18n()

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {content.header.skipToContent}
      </a>
      <Brand onClick={closeMenu} />

      <button
        className={`icon-button site-header__toggle ${
          isOpen ? 'site-header__toggle--open' : ''
        }`}
        type="button"
        aria-label={isOpen ? content.header.closeMenu : content.header.openMenu}
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}
        id="site-navigation"
        aria-label={content.header.navLabel}
      >
        {content.navItems.map((item) => (
          <a key={item.section} href={sectionPath(item.section)} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="button button--small" href={sectionPath('contact')} onClick={closeMenu}>
          {content.header.requestInfo}
        </a>
        <LanguageSwitcher onSelect={closeMenu} />
      </nav>
    </header>
  )
}
