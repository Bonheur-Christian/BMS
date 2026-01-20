const faqs = [
  ['Is there a free trial?', 'Yes, 14 days free.'],
  ['Is my data secure?', 'Enterprise-grade encryption.'],
]

export default function FAQ() {
  return (
    <section className="py-20 px-6 border-t">
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map(([q, a], i) => (
          <details key={i} className="border rounded-lg p-6">
            <summary className="font-semibold cursor-pointer">{q}</summary>
            <p className="mt-3 text-sm text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
