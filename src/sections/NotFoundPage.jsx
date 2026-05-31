import { ArrowLeft } from 'lucide-react'

import { useI18n } from '../i18n/i18nContext'

export function NotFoundPage() {
  const { content, sectionPath } = useI18n()

  return (
    <main id="main-content" tabIndex="-1">
      <section className="section not-found-page">
        <div className="container container--narrow">
          <p className="not-found-page__eyebrow">{content.notFound.eyebrow}</p>
          <h1>{content.notFound.title}</h1>
          <p className="not-found-page__intro">{content.notFound.text}</p>
          <a className="button" href={sectionPath('home')}>
            <ArrowLeft aria-hidden="true" />
            {content.notFound.cta}
          </a>
        </div>
      </section>
    </main>
  )
}
