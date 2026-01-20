export default function HowItWorks() {
  const steps = ['Sign Up', 'Configure', 'Invite Team', 'Start Managing']

  return (
    <section className="py-20 px-6 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {steps.map((s, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <div className="text-4xl text-primary font-bold mb-2">0{i + 1}</div>
            <h3 className="font-semibold">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
