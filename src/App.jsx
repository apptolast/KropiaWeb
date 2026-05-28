import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { getLegalPageByPath } from './data/legalContent'
import { ContactSection } from './sections/ContactSection'
import { FaqSection } from './sections/FaqSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { LegalPage } from './sections/LegalPage'
import { PricingSection } from './sections/PricingSection'
import { ProcessSection } from './sections/ProcessSection'
import { TeamSection } from './sections/TeamSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { ValueSection } from './sections/ValueSection'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ValueSection />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}

function App() {
  const legalPage = getLegalPageByPath(window.location.pathname)

  return (
    <>
      <Header />
      {legalPage ? <LegalPage page={legalPage} /> : <HomePage />}
      <Footer />
    </>
  )
}

export default App
