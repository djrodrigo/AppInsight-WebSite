import React from 'react'
import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import ProductShowcase from './components/sections/ProductShowcase'
import FeaturesSection from './components/sections/FeaturesSection'
import ScreenshotsSection from './components/sections/ScreenshotsSection'
import HikariCPSection from './components/sections/HikariCPSection'
import IntegrationSection from './components/sections/IntegrationSection'
import PlatformSection from './components/sections/PlatformSection'
import BenefitsSection from './components/sections/BenefitsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import PricingSection from './components/sections/PricingSection'
import FAQSection from './components/sections/FAQSection'
import FinalCTASection from './components/sections/FinalCTASection'
import Footer from './components/Footer'
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
