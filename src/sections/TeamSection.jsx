import { TeamMemberCard } from '../components/cards/TeamMemberCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useI18n } from '../i18n/i18nContext'

export function TeamSection() {
  const { content } = useI18n()

  return (
    <section className="section team-section">
      <div className="container">
        <SectionHeading title={content.team.title} centered>
          {content.team.text}
        </SectionHeading>

        <div className="team-grid">
          {content.team.members.map((member) => (
            <TeamMemberCard key={member.name} labels={content.team} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
