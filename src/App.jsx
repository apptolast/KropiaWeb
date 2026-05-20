import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Activity,
  BellRing,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Eye,
  Grid2X2,
  Leaf,
  Menu,
  Phone,
  Play,
  RouteOff,
  Send,
  ShieldCheck,
  Signal,
  Sprout,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

const valueCards = [
  {
    icon: Eye,
    title: 'Vea su invernadero',
    text: 'Vigilancia visual constante y precisa de sus cultivos desde cualquier lugar.',
  },
  {
    icon: BellRing,
    title: 'Le avisamos si algo va mal',
    text: 'Alertas inteligentes inmediatas ante cualquier anomalía detectada por los sensores.',
    tone: 'warning',
  },
  {
    icon: Droplets,
    title: 'Controle el riego y la ventilación',
    text: 'Gestión total de los sistemas mecánicos sin necesidad de presencia física.',
  },
  {
    icon: RouteOff,
    title: 'Sin viajes innecesarios',
    text: 'Ahorre tiempo y combustible gestionando su explotación de forma remota.',
    tone: 'earth',
  },
]

const featureCards = [
  {
    icon: Activity,
    title: 'Monitorización',
    text: 'Visualización constante de parámetros críticos como temperatura de suelo, aire y niveles de CO2.',
    className: 'feature-card--wide',
    image: '/assets/greenhouse.jpg',
  },
  {
    icon: Zap,
    title: 'Control remoto',
    text: 'Accione ventanas, bombas de agua y extractores pulsando un botón desde la aplicación móvil.',
    className: 'feature-card--primary',
  },
  {
    icon: TrendingUp,
    title: 'Gráficos históricos',
    text: 'Analice la evolución de sus cultivos con datos históricos detallados por días o semanas.',
  },
  {
    icon: Grid2X2,
    title: 'Multi-invernadero',
    text: 'Gestione múltiples explotaciones desde una única cuenta de usuario sin complicaciones.',
  },
  {
    icon: ShieldCheck,
    title: 'Conexión segura',
    text: 'Sus datos están protegidos con encriptación de grado profesional y copias de seguridad.',
  },
]

const processSteps = [
  {
    title: 'Nos llama y le visitamos',
    text: 'Analizamos las necesidades específicas de su finca y le proponemos la mejor configuración de sensores y actuadores.',
  },
  {
    title: 'Instalamos todo',
    text: 'Nuestro equipo técnico se desplaza para realizar la instalación completa del hardware en un solo día.',
  },
  {
    title: 'Le enseñamos a usarlo',
    text: 'Configuramos la aplicación en su móvil y le damos una formación rápida para que sepa interpretar cada dato.',
  },
  {
    title: 'Usted controla, nosotros mantenemos',
    text: 'Disfrute de la tranquilidad. Nosotros nos encargamos de que el sistema esté siempre actualizado y funcionando.',
  },
]

const pricingPlans = [
  {
    eyebrow: 'Esencial',
    title: 'Pack Básico',
    price: '1.800€',
    monthly: '+ 49€/mes',
    description: 'Ideal para explotaciones pequeñas.',
    features: ['2 sensores temperatura', 'App móvil básica', 'Alertas por SMS'],
  },
  {
    eyebrow: 'Profesional',
    title: 'Pack Estándar',
    price: '3.500€',
    monthly: '+ 89€/mes',
    description: 'Nuestra solución más demandada.',
    features: [
      'Sensores completos',
      'Control de riego remoto',
      'Gráficos avanzados',
      'Soporte prioritario',
    ],
    highlighted: true,
  },
  {
    eyebrow: 'A medida',
    title: 'Pack Profesional',
    price: '7.000€',
    monthly: '+ 149€/mes',
    description: 'Control total multi-zona.',
    features: [
      'Automatización total',
      'Control de ventilación',
      'Multi-usuario ilimitado',
      'Integracion ERP',
    ],
  },
]

const teamMembers = [
  {
    name: 'Jesus',
    role: 'Dirección Técnica',
    image: '/assets/team-jesus.jpg',
  },
  {
    name: 'Jose',
    role: 'Hardware & Sensores',
    image: '/assets/team-jose.jpg',
  },
  {
    name: 'Pablo',
    role: 'Desarrollo App',
    image: '/assets/team-pablo.jpg',
  },
  {
    name: 'Alberto',
    role: 'Soporte y Clientes',
    image: '/assets/team-alberto.jpg',
  },
]

const testimonials = [
  {
    quote:
      'Desde que instalé Kropia, ya no tengo que ir al cortijo cada mañana solo para ver cómo están las ventanas. Ahora abro el móvil mientras desayuno y lo controlo todo.',
    author: 'Antonio García',
    role: 'Agricultor, Almería',
  },
  {
    quote:
      'La tranquilidad de que la aplicación te avise si sube demasiado la temperatura no tiene precio. He salvado la cosecha de este año gracias a una alerta a tiempo.',
    author: 'María Rodríguez',
    role: 'Productora hortofrutícola',
  },
]

const faqs = [
  {
    question: '¿Qué pasa si se va la luz en el invernadero?',
    answer:
      'Los equipos pueden incluir batería de respaldo y una alerta crítica para avisarle del corte de energía en cuanto se detecte.',
  },
  {
    question: '¿Necesito tener Wi-Fi allí?',
    answer:
      'No tiene por qué. La instalación puede trabajar con conectividad móvil industrial para zonas rurales con cobertura limitada.',
  },
  {
    question: '¿Es difícil de usar la aplicación?',
    answer:
      'No. La interfaz está pensada para revisar datos clave, recibir alertas y activar controles sin tecnicismos innecesarios.',
  },
]

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Kropia inicio" onClick={closeMenu}>
        <Leaf aria-hidden="true" />
        <span>Kropia + AppToLast</span>
      </a>

      <button
        className="icon-button site-header__toggle"
        type="button"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav className={`site-nav ${isOpen ? 'site-nav--open' : ''}`} aria-label="Principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="button button--small" href="#contacto" onClick={closeMenu}>
          Solicitar información
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section section" id="inicio">
      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <span className="eyebrow">Tecnología agrícola de precisión</span>
          <h1>
            Controla tu invernadero <span>desde el móvil</span>, estés donde estés
          </h1>
          <p>
            Kropia te permite ver la temperatura, humedad y estado de tu invernadero en
            tiempo real. Sin complicaciones.
          </p>
          <div className="hero-section__actions">
            <a className="button" href="#contacto">
              Solicitar información
            </a>
            <a className="store-badge" href="#contacto" aria-label="Disponible en Google Play">
              <Play aria-hidden="true" fill="currentColor" />
              <span>
                <small>Disponible en</small>
                Google Play
              </span>
            </a>
          </div>
        </div>

        <div className="hero-device" aria-label="Vista previa de la app Kropia">
          <div className="hero-device__plate">
            <img src="/assets/hero-device.jpg" alt="" />
          </div>
          <div className="sensor-panel sensor-panel--top">
            <Signal aria-hidden="true" />
            <span>Conectado</span>
          </div>
          <div className="sensor-panel sensor-panel--bottom">
            <Sprout aria-hidden="true" />
            <span>Humedad 72%</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValueSection() {
  return (
    <section className="section value-section" aria-labelledby="valor-title">
      <div className="container">
        <h2 className="sr-only" id="valor-title">
          Beneficios principales
        </h2>
        <div className="value-grid">
          {valueCards.map(({ icon: Icon, title, text, tone }) => (
            <article className={`value-card ${tone ? `value-card--${tone}` : ''}`} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="section features-section" id="funcionalidades">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2>Todo lo que necesitas</h2>
          <p>Tecnología de última generación adaptada a la sencillez del campo.</p>
        </div>

        <div className="feature-grid">
          {featureCards.map(({ icon: Icon, title, text, className = '', image }) => (
            <article className={`feature-card ${className}`} key={title}>
              <div>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              {image && <img src={image} alt="Interior de un invernadero monitorizado" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section process-section">
      <div className="container process-section__grid">
        <div className="section-heading">
          <h2>Cómo funciona Kropia</h2>
          <p>Un proceso sencillo pensado para que usted solo se preocupe de lo importante: su cosecha.</p>
        </div>

        <div className="process-list">
          {processSteps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="section pricing-section" id="precios">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2>Planes adaptados a su medida</h2>
          <p>Elija la potencia de control que su explotación necesita.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`price-card ${plan.highlighted ? 'price-card--highlighted' : ''}`}
              key={plan.title}
            >
              {plan.highlighted && <span className="badge">Recomendado</span>}
              <p className="price-card__eyebrow">{plan.eyebrow}</p>
              <h3>{plan.title}</h3>
              <p className="price-card__description">{plan.description}</p>
              <div className="price-card__price">
                <strong>{plan.price}</strong>
                <span>{plan.monthly}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="button button--ghost" href="#contacto">
                Pedir presupuesto
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="section team-section">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2>El equipo de AppToLast</h2>
          <p>Detrás de Kropia hay personas comprometidas con la innovación en el campo.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-member" key={member.name}>
              <img src={member.image} alt={`Retrato de ${member.name}`} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="testimonial-card">
          <span className="quote-mark" aria-hidden="true">
            "
          </span>
          <div className="testimonial-card__grid">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <div className="section-heading section-heading--center">
          <h2 id="faq-title">Preguntas frecuentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" />
                </button>
                <p>{faq.answer}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const [isSending, setIsSending] = useState(false)

  const isConfigured =
    emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'idle', text: '' })

    if (!isConfigured) {
      setStatus({
        type: 'info',
        text: 'Formulario listo. Falta configurar las variables VITE_EMAILJS_* para activar el envío.',
      })
      return
    }

    try {
      setIsSending(true)
      await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, {
        publicKey: emailConfig.publicKey,
      })
      formRef.current.reset()
      setStatus({
        type: 'success',
        text: 'Solicitud enviada. Le contactaremos lo antes posible.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        text: error?.text || 'No se ha podido enviar la solicitud. Intente de nuevo en unos minutos.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-section__grid">
        <div className="contact-section__copy">
          <div className="section-heading">
            <h2>Hablemos de su proyecto</h2>
            <p>
              Estamos listos para ayudarle a dar el salto a la agricultura digital. Déjenos
              sus datos y le llamaremos hoy mismo.
            </p>
          </div>

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
              <input name="user_name" type="text" placeholder="Su nombre completo" required />
            </label>
            <label>
              Teléfono
              <input name="user_phone" type="tel" placeholder="600 000 000" required />
            </label>
          </div>
          <label>
            Email
            <input name="user_email" type="email" placeholder="correo@ejemplo.com" required />
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
          <button className="button contact-form__submit" type="submit" disabled={isSending}>
            <Send aria-hidden="true" />
            {isSending ? 'Enviando...' : 'Enviar solicitud'}
          </button>
          {status.text && <p className={`form-status form-status--${status.type}`}>{status.text}</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <a className="brand" href="#inicio" aria-label="Kropia inicio">
            <Leaf aria-hidden="true" />
            <span>Kropia</span>
          </a>
          <p>Revolucionando el campo a través de tecnología inteligente y compromiso real.</p>
        </div>
        <div>
          <h2>Navegación</h2>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>Legal</h2>
          <a href="#contacto">Privacidad</a>
          <a href="#contacto">Aviso legal</a>
          <a href="#contacto">Cookies</a>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>Calle Tecnológica 42, 04001 Almería, España</p>
          <a href="mailto:info@kropia.es">info@kropia.es</a>
        </div>
      </div>
      <p className="site-footer__copy">© 2026 Kropia by AppToLast. Todos los derechos reservados.</p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <FeaturesSection />
        <ProcessSection />
        <PricingSection />
        <TeamSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
