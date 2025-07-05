import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Dr. Serena Blake</div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#about" className="hover:text-teal-300 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-teal-300 transition-colors">
              Services
            </a>
            <a href="#faq" className="hover:text-teal-300 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">
              Contact
            </a>
          </div>
          <Button
            variant="outline"
            className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-teal-900 bg-transparent"
          >
            Schedule Discovery Call
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Trust Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">Rated Excellent on Psychology Today</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Compassionate Care &<br />
          <span className="text-teal-300">Healing</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Licensed clinical psychologist helping you overcome anxiety, strengthen relationships, and heal from trauma
          through evidence-based therapy in Los Angeles.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-teal-400 hover:bg-teal-500 text-teal-900 font-semibold px-8 py-4 text-lg">
            Book a Free Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 text-lg bg-transparent"
          >
            Learn More About Me
          </Button>
        </div>

        {/* Quick Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">8+</div>
            <div className="text-white text-sm">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">500+</div>
            <div className="text-white text-sm">Client Sessions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">PsyD</div>
            <div className="text-white text-sm">Licensed Psychologist</div>
          </div>
        </div>
      </div>
    </section>
  )
}
