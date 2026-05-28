import { useI18n } from '../../i18n/i18nContext'
import { Brand } from '../ui/Brand'

export function Footer() {
  const { content, pathFor, sectionPath } = useI18n()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <Brand label="Kropia" />
          <p>{content.footer.description}</p>
        </div>
        <div>
          <h2>{content.footer.navigation}</h2>
          {content.navItems.map((item) => (
            <a key={item.section} href={sectionPath(item.section)}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>{content.footer.legal}</h2>
          <a href={pathFor('privacy')}>{content.footer.privacy}</a>
          <a href={pathFor('legalNotice')}>{content.footer.legalNotice}</a>
        </div>
        <div>
          <h2>{content.footer.contact}</h2>
          <a href="mailto:admin@apptolast.com">admin@apptolast.com</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p className="site-footer__copy">{content.footer.copy}</p>
      </div>
    </footer>
  )
}
