import { BriefcaseBusiness, Code2 } from 'lucide-react'

function formatLabel(template, name) {
  return template.replace('{name}', name)
}

export function TeamMemberCard({
  image,
  imageHeight,
  imageWidth,
  imagePosition,
  name,
  role,
  bio,
  labels,
  superpower,
  stack = [],
  social = {},
}) {
  return (
    <article className="team-member">
      <img
        src={image}
        alt={formatLabel(labels.portraitAlt, name)}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="team-member__body">
        <div className="team-member__header">
          <div>
            <h3>{name}</h3>
            <p className="team-member__role">{role}</p>
          </div>
        </div>
        <div className="team-member__social">
          {social.linkedin ? (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={formatLabel(labels.linkedinLabel, name)}
            >
              <BriefcaseBusiness aria-hidden="true" />
            </a>
          ) : null}
          {social.github ? (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label={formatLabel(labels.githubLabel, name)}
            >
              <Code2 aria-hidden="true" />
            </a>
          ) : null}
        </div>
        <p className="team-member__bio">{bio}</p>
        <div className="team-member__focus">
          <span>{labels.focusLabel}</span>
          <strong>{superpower}</strong>
        </div>
        <div className="team-member__stack" aria-label={formatLabel(labels.stackLabel, name)}>
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
