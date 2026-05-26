import { BriefcaseBusiness, Code2 } from 'lucide-react'

export function TeamMemberCard({ image, name, role, bio, superpower, stack = [], social = {} }) {
  return (
    <article className="team-member">
      <img src={image} alt={`Retrato de ${name}`} loading="lazy" decoding="async" />
      <div className="team-member__body">
        <div className="team-member__header">
          <div>
            <h3>{name}</h3>
            <p className="team-member__role">{role}</p>
          </div>
        </div>
        <div className="team-member__social">
          {social.linkedin ? (
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn de ${name}`}>
              <BriefcaseBusiness aria-hidden="true" />
            </a>
          ) : null}
          {social.github ? (
            <a href={social.github} target="_blank" rel="noreferrer" aria-label={`GitHub de ${name}`}>
              <Code2 aria-hidden="true" />
            </a>
          ) : null}
        </div>
        <p className="team-member__bio">{bio}</p>
        <div className="team-member__focus">
          <span>Especialidad</span>
          <strong>{superpower}</strong>
        </div>
        <div className="team-member__stack" aria-label={`Stack técnico de ${name}`}>
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
