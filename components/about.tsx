import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Dr. Serena Blake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">PsyD</div>
              <div className="text-sm">Clinical Psychologist</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Dr. Serena Blake</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years
                of experience and over 500 client sessions. She blends evidence-based approaches—like
                cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome
                anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
                creating a safe, supportive space for you to thrive.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">
                      1287 Maplewood Drive
                      <br />
                      Los Angeles, CA 90026
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-sm text-gray-600">(323) 555-0192</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-sm text-gray-600">serena@blakepsychology.com</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <div className="text-sm text-gray-600">
                      In-person: Tue & Thu, 10 AM–6 PM
                      <br />
                      Virtual: Mon, Wed & Fri, 1 PM–5 PM
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
