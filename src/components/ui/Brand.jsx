import kropiaLogo from '../../assets/kropia-logo.webp'

export function Brand({ label = 'Kropia', onClick }) {
  return (
    <a className="brand" href="#inicio" aria-label="Kropia inicio" onClick={onClick}>
      <img src={kropiaLogo} alt="" aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}
