export function SectionHeading({ children, centered = false, id, title }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading--center' : ''}`}>
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
