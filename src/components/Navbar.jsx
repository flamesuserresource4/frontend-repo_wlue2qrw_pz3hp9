import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-content-center font-bold">M</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">MoBook</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#how" className="hover:text-blue-600">How it works</a>
          <a href="#benefits" className="hover:text-blue-600">Benefits</a>
          <a href="#categories" className="hover:text-blue-600">Categories</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#find" className="px-4 py-2 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 transition">Find a Provider</a>
          <a href="#register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Register as Provider</a>
        </div>

        <button className="md:hidden p-2" aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-slate-200/60 bg-white/90">
          <a href="#how" className="block py-2" onClick={() => setOpen(false)}>How it works</a>
          <a href="#benefits" className="block py-2" onClick={() => setOpen(false)}>Benefits</a>
          <a href="#categories" className="block py-2" onClick={() => setOpen(false)}>Categories</a>
          <a href="#pricing" className="block py-2" onClick={() => setOpen(false)}>Pricing</a>
          <div className="pt-2 grid gap-2">
            <a href="#find" className="px-4 py-2 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 transition" onClick={() => setOpen(false)}>Find a Provider</a>
            <a href="#register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={() => setOpen(false)}>Register as Provider</a>
          </div>
        </div>
      )}
    </header>
  )
}
