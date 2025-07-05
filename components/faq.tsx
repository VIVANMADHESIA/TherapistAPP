"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits help cover a portion of the cost.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater flexibility for busy schedules.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24-hour notice for cancellations. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This allows adequate time to explore issues deeply while maintaining a structured therapeutic framework.",
  },
  {
    question: "What should I expect in the first session?",
    answer:
      "The first session is an opportunity for us to get to know each other. We'll discuss your concerns, goals, and what brought you to therapy. I'll explain my approach and we'll work together to create a treatment plan that feels right for you.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Common questions about therapy sessions and my practice</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have more questions? I'm here to help.</p>
          <a href="#contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">
            Get in touch with me
          </a>
        </div>
      </div>
    </section>
  )
}
