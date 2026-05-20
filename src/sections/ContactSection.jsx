import { Phone, Send } from 'lucide-react'

import { SectionHeading } from '../components/ui/SectionHeading'
import { useEmailJsForm } from '../hooks/useEmailJsForm'

export function ContactSection() {
  const { formRef, handleSubmit, isSending, status } = useEmailJsForm()

  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-section__grid">
        <div className="contact-section__copy">
          <SectionHeading title="Hablemos de su proyecto">
            Estamos listos para ayudarle a dar el salto a la agricultura digital. Déjenos
            sus datos y le llamaremos hoy mismo.
          </SectionHeading>

          <a className="phone-card" href="tel:+34950000000">
            <Phone aria-hidden="true" />
            <span>
              Atención telefónica
              <strong>+34 950 00 00 00</strong>
            </span>
          </a>
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Nombre
              <input
                name="user_name"
                type="text"
                placeholder="Su nombre completo"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Teléfono
              <input
                name="user_phone"
                type="tel"
                placeholder="600 000 000"
                autoComplete="tel"
                required
              />
            </label>
          </div>
          <label>
            Email
            <input
              name="user_email"
              type="email"
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              required
            />
          </label>
          <label>
            Número de invernaderos
            <select name="greenhouse_count" defaultValue="1-2 invernaderos">
              <option>1-2 invernaderos</option>
              <option>3-5 invernaderos</option>
              <option>Más de 5 invernaderos</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea name="message" rows="5" placeholder="¿En qué podemos ayudarle?" />
          </label>
          <input type="hidden" name="project_name" value="Kropia" />
          <button
            className="button contact-form__submit"
            type="submit"
            disabled={isSending}
            aria-busy={isSending}
          >
            <Send aria-hidden="true" />
            {isSending ? 'Enviando...' : 'Enviar solicitud'}
          </button>
          {status.text && (
            <p
              className={`form-status form-status--${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
