'use client'

import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import Benefits from '@/components/landing/Benefits'
import Stats from '@/components/landing/Stats'
import Pricing from '@/components/landing/Pricing'
import HowItWorks from '@/components/landing/HowItWorks'
import FAQ from '@/components/landing/FAQs'
import Footer from '@/components/landing/Footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80caff44_1px,transparent_1px),linear-gradient(to_bottom,#80caff44_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <Navbar />

      <Hero />
      <Features />
      <Benefits />
      <Stats />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center p-12 border rounded-2xl bg-primary/10">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-6">
            Start your free trial today. No credit card required.
          </p>
          <Button size="lg">
            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
