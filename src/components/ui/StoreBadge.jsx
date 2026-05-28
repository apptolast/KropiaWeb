import googlePlayBadge from '../../assets/google-play-badge.png'
import { useI18n } from '../../i18n/i18nContext'

export function StoreBadge() {
  const { content, locale } = useI18n()
  const storeBadge = content.storeBadge

  return (
    <a
      className={`store-badge ${locale === 'en' ? 'store-badge--text' : ''}`}
      href="https://play.google.com/store/apps/details?id=com.apptolast.greenhousefronts"
      target="_blank"
      rel="noreferrer"
      aria-label={storeBadge.ariaLabel}
    >
      {locale === 'es' ? (
        <img src={googlePlayBadge} alt={storeBadge.alt} />
      ) : (
        <span>{storeBadge.fallbackLabel}</span>
      )}
    </a>
  )
}
