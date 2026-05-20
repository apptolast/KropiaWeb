import { TeamMemberCard } from '../components/cards/TeamMemberCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { teamMembers } from '../data/siteContent'

export function TeamSection() {
  return (
    <section className="section team-section">
      <div className="container">
        <SectionHeading title="El equipo de AppToLast" centered>
          Detrás de Kropia hay personas comprometidas con la innovación en el campo.
        </SectionHeading>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
