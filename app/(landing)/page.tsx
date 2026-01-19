'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Network, Users, Lock, Zap, Globe, Settings, CheckCircle, BarChart3, Shield, Cpu, BookOpen, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function LandingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredPricingIndex, setHoveredPricingIndex] = useState<number | null>(null)

  const features = [
    {
      title: 'Dynamic Structure',
      description: 'Configure departments on-demand. Your business, your rules.',
      icon: Network,
    },
    {
      title: 'Worker Management',
      description: 'Add, assign, and manage your team with granular control.',
      icon: Users,
    },
    {
      title: 'Role & Permissions',
      description: 'Define custom roles and control exactly what users can do.',
      icon: Lock,
    },
    {
      title: 'Lightning Fast',
      description: 'Built for speed with real-time updates and instant syncing.',
      icon: Zap,
    },
    {
      title: 'Multi-Business',
      description: 'Manage multiple businesses from a single dashboard.',
      icon: Globe,
    },
    {
      title: 'Enterprise Ready',
      description: 'Secure, scalable infrastructure built for growth.',
      icon: Settings,
    },
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor your business metrics instantly with comprehensive dashboards and detailed reports.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to keep your data safe and compliant.',
    },
    {
      icon: Cpu,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows to boost productivity and reduce errors.',
    },
    {
      icon: Users,
      title: 'Seamless Collaboration',
      description: 'Built-in tools for teams to communicate, collaborate, and stay aligned.',
    },
  ]

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

  const faqs = [
    {
      question: 'How does BMS handle data security?',
      answer: 'We use enterprise-grade encryption (AES-256), regular security audits, and comply with GDPR and SOC 2 standards. Your data is protected with the same security measures used by leading financial institutions.',
    },
    {
      question: 'Can I import my existing data?',
      answer: 'Yes! We provide easy-to-use import tools for CSV files and direct integrations with common business platforms. Our support team can also help with custom data migrations.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, with priority and 24/7 phone support available for Professional and Enterprise plans. We also have comprehensive documentation and video tutorials.',
    },
    {
      question: 'Can I customize workflows for my business?',
      answer: 'Absolutely! BMS is built to be flexible. You can create custom workflows, set role-based permissions, and configure the system to match your specific business processes.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all plans come with a 14-day free trial with full feature access. No credit card required to get started.',
    },
    {
      question: 'How do you handle compliance and regulations?',
      answer: 'BMS is SOC 2 Type II certified and compliant with GDPR, HIPAA, and other major regulatory frameworks. We conduct regular security audits and penetration testing.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80caff44_1px,transparent_1px),linear-gradient(to_bottom,#80caff44_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">BMS</span>
            </div>
            <span className="font-bold text-lg text-foreground">Business Management</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#features" className="text-foreground/70 hover:text-foreground transition">
              Features
            </Link>
            <Link href="#benefits" className="text-foreground/70 hover:text-foreground transition">
              Benefits
            </Link>
            <Link href="#pricing" className="text-foreground/70 hover:text-foreground transition">
              Pricing
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-sm font-medium text-primary">✨ Next-Gen Business Tools</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Simplify Your
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Business Ops</span>
              </h1>

              <p className="text-xl text-foreground/70 text-balance">
                A configurable business management system built for modern entrepreneurs. Define your structure, manage your team, and scale with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group">
                  Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent">
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <p className="text-sm text-foreground/60">Active Users</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-accent">99.9%</div>
                  <p className="text-sm text-foreground/60">Uptime</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-foreground/60">Support</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 space-y-4">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Network className="w-16 h-16 text-primary/50" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-primary/20 rounded-full w-3/4" />
                  <div className="h-3 bg-primary/10 rounded-full w-1/2" />
                  <div className="h-3 bg-primary/20 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Everything You Need
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Powerful features designed to adapt to your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-accent/10 transition-opacity duration-300" />

                  <div className="relative p-6 space-y-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg w-fit group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-2 inline-flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              { label: '50+ Components', value: 'Built with care' },
              { label: '100% Secure', value: 'Enterprise-grade' },
              { label: '< 100ms Response', value: 'Lightning fast' },
              { label: '∞ Scalability', value: 'Grows with you' },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-card/50 border border-border/50 rounded-lg backdrop-blur hover:border-primary/30 transition-colors text-center">
                <div className="font-bold text-primary text-lg">{stat.label}</div>
                <div className="text-foreground/60 text-sm mt-1">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.highlighted
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
                    className={`w-full ${
                      plan.highlighted
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

      {/* How It Works Section */}
      <section className="relative py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Simple onboarding process to get your business up and running
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Sign Up',
                description: 'Create your account in seconds with email or social login.',
              },
              {
                number: '02',
                title: 'Configure',
                description: 'Set up your business structure and define your organizational hierarchy.',
              },
              {
                number: '03',
                title: 'Invite Team',
                description: 'Add team members and assign them to roles and departments.',
              },
              {
                number: '04',
                title: 'Start Managing',
                description: 'Begin managing your business with powerful tools and insights.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="text-5xl font-bold text-primary/20 text-center">{step.number}</div>
                  <div className="bg-card/50 border border-border/50 rounded-lg p-6 space-y-2 text-center hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-foreground/60">{step.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:flex absolute top-16 -right-4 items-center justify-center w-8">
                    <ArrowRight className="w-5 h-5 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-foreground/60">
              Got questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
                <details className="p-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 font-semibold text-foreground hover:text-primary transition-colors">
                    <span>{faq.question}</span>
                    <Lightbulb className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </summary>
                  <p className="mt-4 text-foreground/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 p-12 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:40px_40px]" />
            </div>

            <div className="relative space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Join thousands of entrepreneurs managing their operations more efficiently with BMS. Start your free trial today—no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group">
                  Start Your Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BMS</span>
                </div>
                <span className="font-bold text-foreground">BMS</span>
              </div>
              <p className="text-sm text-foreground/60">Simplifying business management for modern entrepreneurs.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition">Security</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; 2024 Business Management System. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition">Twitter</a>
              <a href="#" className="hover:text-foreground transition">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
