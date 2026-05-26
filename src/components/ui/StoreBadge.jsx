import googlePlayBadge from '../../assets/google-play-badge.png'

export function StoreBadge() {
  return (
    <a
      className="store-badge"
      href="https://play.google.com/store/apps/details?id=com.apptolast.greenhousefronts"
      target="_blank"
      rel="noreferrer"
      aria-label="Disponible en Google Play"
    >
      <img src={googlePlayBadge} alt="Disponible en Google Play" />
    </a>
  )
}
