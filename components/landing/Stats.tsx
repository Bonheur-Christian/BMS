export default function Stats() {
  const stats = [
    ['50+ Components', 'Built with care'],
    ['100% Secure', 'Enterprise-grade'],
    ['<100ms', 'Fast responses'],
    ['∞ Scalability', 'Grows with you'],
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(([title, desc], i) => (
          <div key={i} className="p-6 border rounded-lg text-center">
            <div className="font-bold text-primary">{title}</div>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
