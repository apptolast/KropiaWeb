import { Send } from 'lucide-react'

import { SectionHeading } from '../components/ui/SectionHeading'
import { useEmailJsForm } from '../hooks/useEmailJsForm'

export function ContactSection() {
  const { formRef, handleSubmit, isSending, status } = useEmailJsForm()

  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-section__grid">
        <div className="contact-section__copy">
          <SectionHeading title="Hablemos de su proyecto">
            Cuéntenos cuántos invernaderos, sectores y dispositivos quiere conectar.
            Revisaremos el alcance y le responderemos por correo.
          </SectionHeading>

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
          <p className="contact-form__legal">
            Al enviar el formulario, trataremos sus datos para responder a su solicitud. Puede
            consultar más información en la <a href="/privacidad">política de privacidad</a>.
          </p>
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
