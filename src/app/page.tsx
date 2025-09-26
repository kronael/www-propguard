'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import Capabilities from '@/components/Capabilities'
import HowItWorks from '@/components/HowItWorks'
import LoyaltyCallout from '@/components/LoyaltyCallout'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Problems />
      <Capabilities />
      <HowItWorks />
      <LoyaltyCallout />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
