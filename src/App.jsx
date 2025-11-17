import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Categories from './components/Categories'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Categories />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} MoBook. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
