import { Play } from 'lucide-react'

export function StoreBadge() {
  return (
    <a className="store-badge" href="#contacto" aria-label="Disponible en Google Play">
      <Play aria-hidden="true" fill="currentColor" />
      <span>
        <small>Disponible en</small>
        Google Play
      </span>
    </a>
  )
}
