import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to grow with MoBook?</h2>
          <p className="mt-3 text-blue-100">Join as a provider or find a trusted professional near you today.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href="#register" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition">
              Join MoBook as a Service Provider
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#find" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-400 transition">
              Find a Service Provider Near You
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
