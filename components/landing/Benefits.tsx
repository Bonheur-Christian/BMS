'use client'

import { BarChart3, Shield, Cpu, Users } from 'lucide-react'

const benefits = [
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Instant business insights.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level protection.' },
  { icon: Cpu, title: 'Smart Automation', desc: 'Reduce repetitive work.' },
  { icon: Users, title: 'Team Collaboration', desc: 'Work better together.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {benefits.map((b, i) => {
          const Icon = b.icon
          return (
            <div key={i} className="p-8 border rounded-xl bg-card/50">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
