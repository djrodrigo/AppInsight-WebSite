import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/shared/HeroSection/HeroSection'
import ProductShowcase from './components/shared/ProductShowcase/ProductShowcase'
import FeaturesSection from './components/shared/FeaturesSection/FeaturesSection'
import ScreenshotsSection from './components/shared/ScreenshotsSection/ScreenshotsSection'
import HikariCPSection from './components/shared/HikariCPSection/HikariCPSection'
import IntegrationSection from './components/shared/IntegrationSection/IntegrationSection'
import PlatformSection from './components/shared/PlatformSection/PlatformSection'
import BenefitsSection from './components/shared/BenefitsSection/BenefitsSection'
import TestimonialsSection from './components/shared/TestimonialsSection/TestimonialsSection'
import PricingSection from './components/shared/PricingSection/PricingSection'
import FAQSection from './components/shared/FAQSection/FAQSection'
import FinalCTASection from './components/shared/FinalCTASection/FinalCTASection'
import Footer from './components/Footer/Footer'
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <FeaturesSection />
        <ScreenshotsSection />
        <HikariCPSection />
        <IntegrationSection />
        <PlatformSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
