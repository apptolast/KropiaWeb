import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ContactSection } from './sections/ContactSection'
import { FaqSection } from './sections/FaqSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { PricingSection } from './sections/PricingSection'
import { ProcessSection } from './sections/ProcessSection'
import { TeamSection } from './sections/TeamSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { ValueSection } from './sections/ValueSection'

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App
