import { Scissors, Sparkles, Car, Heart, Home, Dumbbell, Book, Ellipsis } from 'lucide-react'

const items = [
  { icon: Scissors, label: 'Hairdressers' },
  { icon: Sparkles, label: 'Makeup artists' },
  { icon: Car, label: 'Car repair' },
  { icon: Heart, label: 'Beauty & wellness' },
  { icon: Home, label: 'Home services' },
  { icon: Dumbbell, label: 'Fitness trainers' },
  { icon: Book, label: 'Tutors' },
  { icon: Ellipsis, label: 'And more…' },
]

export default function Categories() {
  return (
    <section id="categories" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Popular categories</h2>
        <p className="mt-2 text-slate-600 text-center">Whatever you need, find it on MoBook</p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-blue-50 grid place-content-center mb-3">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <p className="font-medium text-slate-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
