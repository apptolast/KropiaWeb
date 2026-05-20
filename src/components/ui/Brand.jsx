import { Leaf } from 'lucide-react'

export function Brand({ label = 'Kropia + AppToLast', onClick }) {
  return (
    <a className="brand" href="#inicio" aria-label="Kropia inicio" onClick={onClick}>
      <Leaf aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
