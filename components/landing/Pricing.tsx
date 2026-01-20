'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const plans = [
  { name: 'Starter', price: '$29', features: ['10 users', 'Basic analytics'] },
  { name: 'Pro', price: '$79', features: ['50 users', 'Advanced analytics'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Unlimited', 'Dedicated support'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <Card key={i} className={`p-8 ${p.popular ? 'border-primary ring-1 ring-primary' : ''}`}>
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <div className="text-4xl text-primary my-4">{p.price}</div>
            <Button className="w-full mb-4">Get Started</Button>
            {p.features.map((f, j) => (
              <div key={j} className="flex gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" /> {f}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  )
}
