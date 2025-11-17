export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Loved by customers and providers</h2>
        <p className="mt-2 text-slate-600 text-center">Real stories from people growing with MoBook</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={`https://api.dicebear.com/8.x/thumbs/svg?seed=${encodeURIComponent(t.name)}`} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const data = [
  { name: 'Aisha', role: 'Makeup artist', quote: 'Got fully booked weekends within 2 weeks of joining.' },
  { name: 'Rohit', role: 'Customer', quote: 'Booked a haircut in 30 seconds and got a reminder on the day.' },
  { name: 'Meera', role: 'Yoga trainer', quote: 'Love the calendar and automated reminders—no more no-shows.' },
]
