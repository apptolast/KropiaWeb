import { useI18n } from '../../i18n/i18nContext'
import { localeNames, localeShortNames, supportedLocales } from '../../i18n/routing'

export function LanguageSwitcher({ onSelect }) {
  const { alternatePath, content, locale } = useI18n()

  return (
    <div className="language-switcher" aria-label={content.header.languageLabel}>
      {supportedLocales.map((option) => (
        <a
          key={option}
          href={alternatePath(option)}
          lang={option}
          aria-current={option === locale ? 'true' : undefined}
          aria-label={localeNames[option]}
          onClick={onSelect}
        >
          {localeShortNames[option]}
        </a>
      ))}
    </div>
  )
}
