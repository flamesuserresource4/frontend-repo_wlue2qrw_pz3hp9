import { Search, CheckCircle2, CalendarClock, UserPlus, CalendarRange, Zap } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">How MoBook works</h2>
        <p className="mt-2 text-slate-600 text-center">Simple steps for customers and providers</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">For Customers</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Step icon={<Search className='h-6 w-6 text-blue-600'/>} title="Search" desc="Find trusted providers near you" />
              <Step icon={<CheckCircle2 className='h-6 w-6 text-blue-600'/>} title="Choose" desc="Compare ratings, reviews & availability" />
              <Step icon={<CalendarClock className='h-6 w-6 text-blue-600'/>} title="Book" desc="Pick a time and confirm instantly" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">For Providers</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Step icon={<UserPlus className='h-6 w-6 text-indigo-600'/>} title="Sign Up" desc="Create your profile & services" />
              <Step icon={<CalendarRange className='h-6 w-6 text-indigo-600'/>} title="Set Availability" desc="Sync calendar & set working hours" />
              <Step icon={<Zap className='h-6 w-6 text-indigo-600'/>} title="Get Bookings" desc="Receive instant reservations" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ icon, title, desc }) {
  return (
    <div className="p-4 rounded-xl border border-slate-200">
      <div className="h-10 w-10 rounded-lg bg-blue-50 grid place-content-center mb-3">
        {icon}
      </div>
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  )
}
