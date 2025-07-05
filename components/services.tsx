import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Shield } from "lucide-react"

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to help you find peace and confidence.",
    icon: Heart,
    price: "$200 / session",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen your relationships through improved communication, conflict resolution, and deeper understanding. Whether you're working on romantic partnerships, family dynamics, or friendships, we'll explore healthy patterns and build stronger connections.",
    icon: Users,
    price: "$240 / couples session",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past traumatic experiences in a safe, supportive environment. Using trauma-informed approaches and evidence-based therapies, we'll work at your pace to process difficult experiences and develop resilience for moving forward.",
    icon: Shield,
    price: "$200 / session",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="text-lg font-semibold text-teal-600">{service.price}</div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Learn More</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-teal-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards better mental health. Schedule a free consultation to discuss your needs and
              goals.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
