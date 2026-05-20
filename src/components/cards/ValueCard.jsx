export function ValueCard({ icon: Icon, text, title, tone }) {
  return (
    <article className={`value-card ${tone ? `value-card--${tone}` : ''}`}>
      <Icon aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
