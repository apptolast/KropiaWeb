import { ArrowLeft } from 'lucide-react'

import { useI18n } from '../i18n/i18nContext'

export function LegalPage({ page }) {
  const { content, sectionPath } = useI18n()

  return (
    <main>
      <section className="section legal-page">
        <div className="container container--narrow">
          <a className="legal-page__back" href={sectionPath('home')}>
            <ArrowLeft aria-hidden="true" />
            {content.legalPage.back}
          </a>

          <p className="legal-page__eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="legal-page__intro">{page.intro}</p>
          <p className="legal-page__updated">{page.updatedAt}</p>

          <div className="legal-page__content">
            {page.sections.map((section) => (
              <section className="legal-block" key={section.title}>
                <h2>{section.title}</h2>

                {section.details && (
                  <dl>
                    {section.details.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
