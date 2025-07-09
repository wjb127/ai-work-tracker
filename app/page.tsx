import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
} 