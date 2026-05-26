import { TeamMemberCard } from '../components/cards/TeamMemberCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { teamMembers } from '../data/siteContent'

export function TeamSection() {
  return (
    <section className="section team-section">
      <div className="container">
        <SectionHeading title="Liderazgo técnico de AppToLast" centered>
          Un equipo senior, sin intermediarios ni gestores innecesarios, aplicado al desarrollo y
          despliegue de Kropia.
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
