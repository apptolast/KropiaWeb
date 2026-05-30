import kropiaLogo from '../../assets/kropia-logo.webp'
import { useI18n } from '../../i18n/i18nContext'

export function Brand({ label = 'Kropia', onClick }) {
  const { content, sectionPath } = useI18n()

  return (
    <a
      className="brand"
      href={sectionPath('home')}
      aria-label={`Kropia ${content.navItems[0].label}`}
      onClick={onClick}
    >
      <img src={kropiaLogo} alt="" width="432" height="432" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
