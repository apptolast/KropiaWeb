import { ChevronDown } from 'lucide-react'

export function FaqItem({ answer, isOpen, onToggle, question }) {
  return (
    <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span>{question}</span>
        <ChevronDown aria-hidden="true" />
      </button>
      <p>{answer}</p>
    </article>
  )
}
