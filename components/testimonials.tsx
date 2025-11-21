"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Christina & Alvaro",
      text: "Loved working with Bilal! He made our wedding day extra special with his attention to detail. From my first look with my father to the cake cutting, he has such an amazing team and I will forever be grateful to him for being a part of our day. Everything he touches is light and I couldn't be anymore happier with the pictures he captured! You won't regret choosing him for your special day!\"",
    },
    {
      name: "Joel & Connally",
      text: "After their Together Forever session, Joel and Connally saw themselves in a way words couldn't describe. It wasn't just how they looked; it was how they felt about each other, captured in every photo. This experience was transformative for them.",
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Client Stories</h2>

        <div className="relative">
          <div className="bg-gray-900 p-12 rounded-lg min-h-80">
            <h3 className="text-2xl font-bold mb-6">{testimonials[current].name}</h3>
            <p className="text-lg leading-relaxed text-gray-300">{testimonials[current].text}</p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-white" : "bg-gray-600"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
