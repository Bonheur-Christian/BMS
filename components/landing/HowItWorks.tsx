import { ArrowRight } from "lucide-react"

export default function HowItWorks() {

  return (
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
                  <div className="hidden md:flex absolute top-16 -right-8 items-center justify-center w-12">
                    <ArrowRight className="w-12 h-5 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
