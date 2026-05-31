import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { I18nProvider } from './i18n/I18nProvider'
import { useI18n } from './i18n/i18nContext'
import { ContactSection } from './sections/ContactSection'
import { FaqSection } from './sections/FaqSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { LegalPage } from './sections/LegalPage'
import { NotFoundPage } from './sections/NotFoundPage'
import { PricingSection } from './sections/PricingSection'
import { ProcessSection } from './sections/ProcessSection'
import { TeamSection } from './sections/TeamSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { ValueSection } from './sections/ValueSection'

function HomePage() {
  return (
    <main id="main-content" tabIndex="-1">
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
  return (
    <I18nProvider>
      <AppRoutes />
    </I18nProvider>
  )
}

function AppRoutes() {
  const { legalPage, routeInfo } = useI18n()

  const page = routeInfo.page === 'notFound'
    ? <NotFoundPage />
    : legalPage
      ? <LegalPage page={legalPage} />
      : <HomePage />

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default App
