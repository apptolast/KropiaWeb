import googlePlayBadge from '../../assets/google-play-badge.png'
import { useI18n } from '../../i18n/i18nContext'

export function StoreBadge() {
  const { content } = useI18n()
  const storeBadge = content.storeBadge

  return (
    <a
      className="store-badge"
      href="https://play.google.com/store/apps/details?id=com.apptolast.greenhousefronts"
      target="_blank"
      rel="noreferrer"
      aria-label={storeBadge.ariaLabel}
    >
      <img src={googlePlayBadge} alt={storeBadge.alt} width="2000" height="593" />
    </a>
  )
}
