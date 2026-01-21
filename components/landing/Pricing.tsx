'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'




const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 team members',
      '2 business workspaces',
      'Basic analytics',
      'Email support',
      '5GB storage',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'For growing businesses and teams',
    features: [
      'Up to 50 team members',
      'Unlimited workspaces',
      'Advanced analytics & reports',
      'Priority support',
      '100GB storage',
      'Custom roles & permissions',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited team members',
      'Unlimited workspaces',
      'Real-time collaboration',
      '24/7 phone & email support',
      'Unlimited storage',
      'Advanced security & compliance',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]


export default function Pricing() {

  const [hoveredPricingIndex, setHoveredPricingIndex] = useState<number | null>(null)

  return (
    <section id="pricing" className="relative py-20 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${plan.highlighted
                  ? 'border-primary/50 bg-gradient-to-br from-card to-card/50 ring-1 ring-primary/50 scale-105'
                  : 'border-border/50 bg-card/50'
                }`}
              onMouseEnter={() => setHoveredPricingIndex(index)}
              onMouseLeave={() => setHoveredPricingIndex(null)}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-foreground/60">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-sm text-foreground/60">{plan.period}</span>
                  </div>
                </div>

                <Button
                  className={`w-full ${plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-card border border-primary/30 text-foreground hover:bg-primary/10'
                    }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

  )
}
