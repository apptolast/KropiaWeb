import { useState } from 'react'

import { FaqItem } from '../components/cards/FaqItem'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useI18n } from '../i18n/i18nContext'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { content, routeSectionIds } = useI18n()

  return (
    <section className="section faq-section" aria-labelledby={routeSectionIds.faq}>
      <div className="container container--narrow">
        <SectionHeading title={content.faq.title} id={routeSectionIds.faq} centered />
        <div className="faq-list">
          {content.faq.items.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <FaqItem
                key={faq.question}
                {...faq}
                answerId={`faq-answer-${index}`}
                buttonId={`faq-trigger-${index}`}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? -1 : index)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
