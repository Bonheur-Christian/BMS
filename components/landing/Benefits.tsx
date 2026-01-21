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
      <section id="benefits" className="relative py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose BMS?
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Built with the modern business in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="group p-8 bg-card/50 border border-border/50 rounded-xl backdrop-blur hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-foreground/60 text-sm">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}
