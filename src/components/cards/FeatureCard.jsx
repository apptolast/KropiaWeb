export function FeatureCard({ className = '', icon: Icon, image, text, title }) {
  return (
    <article className={`feature-card ${className}`}>
      <div>
        <Icon aria-hidden="true" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {image && <img src={image} alt="Interior de un invernadero monitorizado" />}
    </article>
  )
}
