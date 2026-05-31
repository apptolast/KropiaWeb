export function FeatureCard({
  className = '',
  icon: Icon,
  image,
  imageAlt,
  imageHeight,
  imageWidth,
  text,
  title,
}) {
  return (
    <article className={`feature-card ${className}`}>
      <div>
        <Icon aria-hidden="true" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
      )}
    </article>
  )
}
