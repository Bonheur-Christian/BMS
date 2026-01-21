import { Lightbulb } from "lucide-react"

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


export default function FAQ() {
  return (
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
  )
}
