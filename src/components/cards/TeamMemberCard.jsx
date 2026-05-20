export function TeamMemberCard({ image, name, role }) {
  return (
    <article className="team-member">
      <img src={image} alt={`Retrato de ${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  )
}
