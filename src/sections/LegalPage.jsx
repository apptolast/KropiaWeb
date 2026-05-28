import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

export function LegalPage({ page }) {
  useEffect(() => {
    document.title = `${page.title} | Kropia`
  }, [page.title])

  return (
    <main>
      <section className="section legal-page">
        <div className="container container--narrow">
          <a className="legal-page__back" href="/#inicio">
            <ArrowLeft aria-hidden="true" />
            Volver a Kropia
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
