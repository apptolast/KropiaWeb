import { ChevronDown } from 'lucide-react'

export function FaqItem({ answer, answerId, buttonId, isOpen, onToggle, question }) {
  return (
    <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        type="button"
        id={buttonId}
        aria-controls={answerId}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown aria-hidden="true" />
      </button>
      <p id={answerId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
        {answer}
      </p>
    </article>
  )
}
