import { testimonials } from '../data/siteContent'

export function TestimonialsSection() {
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
