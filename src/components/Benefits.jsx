import { ShieldCheck, BellRing, Clock3, Smartphone, Star, Eye } from 'lucide-react'

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Why choose MoBook</h2>
        <p className="mt-2 text-slate-600 text-center">Convenience, trust, and growth for everyone</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">For Customers</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              <Benefit icon={<ShieldCheck className='h-5 w-5 text-blue-600'/>} title="Find trusted providers" desc="Verified profiles with ratings & reviews" />
              <Benefit icon={<Clock3 className='h-5 w-5 text-blue-600'/>} title="Real-time availability" desc="See open slots instantly" />
              <Benefit icon={<Smartphone className='h-5 w-5 text-blue-600'/>} title="Book anytime" desc="24/7 from phone or computer" />
              <Benefit icon={<BellRing className='h-5 w-5 text-blue-600'/>} title="Reminders" desc="Get confirmations & reminders" />
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">For Providers</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              <Benefit icon={<Eye className='h-5 w-5 text-indigo-600'/>} title="Increase visibility" desc="Reach customers searching nearby" />
              <Benefit icon={<Smartphone className='h-5 w-5 text-indigo-600'/>} title="Online booking" desc="Let clients self-book securely" />
              <Benefit icon={<Clock3 className='h-5 w-5 text-indigo-600'/>} title="Manage schedule" desc="Control from phone or desktop" />
              <Benefit icon={<BellRing className='h-5 w-5 text-indigo-600'/>} title="Fewer no-shows" desc="Automated reminders reduce misses" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Benefit({ icon, title, desc }) {
  return (
    <li className="p-4 rounded-xl border border-slate-200">
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-lg bg-blue-50 grid place-content-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </li>
  )
}
