export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Simple pricing</h2>
        <p className="mt-2 text-slate-600 text-center">Free for customers. Affordable for providers.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-blue-700">For Customers</p>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Free</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Search & compare providers</li>
              <li>• Book anytime, anywhere</li>
              <li>• Instant confirmations</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-md">
            <p className="text-sm font-semibold text-blue-700">For Providers</p>
            <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Rs 500<span className="text-base font-semibold text-slate-500">/month</span></h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Public profile & reviews</li>
              <li>• Online booking system</li>
              <li>• Calendar & reminders</li>
              <li>• Client management</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-blue-700">Add-on</p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">Sponsored listing</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Top placement in searches</li>
              <li>• Increased visibility</li>
              <li>• Pay as you go</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
