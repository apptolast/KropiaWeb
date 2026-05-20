import { useState } from 'react'

import { FaqItem } from '../components/cards/FaqItem'
import { SectionHeading } from '../components/ui/SectionHeading'
import { faqs } from '../data/siteContent'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <SectionHeading title="Preguntas frecuentes" id="faq-title" centered />
        <div className="faq-list">
          {faqs.map((faq, index) => {
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
