import { Send } from 'lucide-react'

import { SectionHeading } from '../components/ui/SectionHeading'
import { useEmailJsForm } from '../hooks/useEmailJsForm'
import { useI18n } from '../i18n/i18nContext'

export function ContactSection() {
  const { content, pathFor, routeSectionIds } = useI18n()
  const form = content.contact.form
  const { formRef, handleSubmit, isSending, status } = useEmailJsForm(form.status)

  return (
    <section className="section contact-section" id={routeSectionIds.contact}>
      <div className="container contact-section__grid">
        <div className="contact-section__copy">
          <SectionHeading title={content.contact.title}>{content.contact.text}</SectionHeading>

          {/*
          TODO: Reactivar cuando la línea telefónica esté operativa.
          <a className="phone-card" href="tel:+34645826688">
            <Phone aria-hidden="true" />
            <span>
              Atención telefónica
              <strong>+34 645 826 688</strong>
            </span>
          </a>
          */}
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              {form.name}
              <input
                name="user_name"
                type="text"
                placeholder={form.namePlaceholder}
                autoComplete="name"
                required
              />
            </label>
            <label>
              {form.phone}
              <input
                name="user_phone"
                type="tel"
                placeholder={form.phonePlaceholder}
                autoComplete="tel"
                required
              />
            </label>
          </div>
          <label>
            {form.email}
            <input
              name="user_email"
              type="email"
              placeholder={form.emailPlaceholder}
              autoComplete="email"
              required
            />
          </label>
          <label>
            {form.greenhouseCount}
            <select name="greenhouse_count" defaultValue={form.greenhouseOptions[0]}>
              {form.greenhouseOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            {form.message}
            <textarea name="message" rows="5" placeholder={form.messagePlaceholder} />
          </label>
          <p className="contact-form__legal">
            {form.legalPrefix} <a href={pathFor('privacy')}>{form.legalLink}</a>
            {form.legalSuffix}
          </p>
          <input type="hidden" name="project_name" value="Kropia" />
          <button
            className="button contact-form__submit"
            type="submit"
            disabled={isSending}
            aria-busy={isSending}
          >
            <Send aria-hidden="true" />
            {isSending ? form.sending : form.submit}
          </button>
          {status.text && (
            <p
              className={`form-status form-status--${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live={status.type === 'error' ? 'assertive' : 'polite'}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
