import { ArrowRight, Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Book trusted local services in minutes
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              MoBook connects customers with nearby professionals — from beauty and wellness to home services and repairs. For providers, it\'s an all-in-one system to get discovered, accept bookings, and stay organized.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#find" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Find a Service Provider
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#register" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 transition font-medium">
                Register as a Provider
              </a>
            </div>

            <div className="mt-8 bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-slate-400" />
                <input className="flex-1 outline-none bg-transparent" placeholder="Try \"hairdresser in Mumbai\"" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">Search</button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 h-72 w-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-10 -left-10 h-72 w-72 bg-indigo-200 rounded-full blur-3xl opacity-40" />
            <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {['Hairdresser','Makeup','Barber','Car Repair','Electrician','Fitness','Tutor','Spa'].map((item) => (
                  <div key={item} className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition">
                    <p className="text-sm font-semibold text-slate-800">{item}</p>
                    <p className="text-xs text-slate-500">Available today</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">Thousands of verified providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
