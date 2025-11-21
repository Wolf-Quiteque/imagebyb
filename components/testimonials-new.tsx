"use client"

import { useState } from "react"

const TESTIMONIALS = [
  {
    name: "Christina & Alvaro",
    quote:
      "Loved working with Bilal! He made our wedding day extra special with his attention to detail. From my first look with my father to the cake cutting, he has such an amazing team and I will forever be grateful to him for being a part of our day.",
  },
  {
    name: "Sarah & James",
    quote:
      "Bilal captured every moment beautifully. We couldn't have asked for a better photographer for our special day. Every photo is a treasure we'll cherish forever.",
  },
  {
    name: "Maria & David",
    quote:
      "The professionalism and creativity were outstanding. We love every single photo from our engagement session. Highly recommended to anyone looking for exceptional wedding photography!",
  },
  {
    name: "Flo & Pierre",
    quote:
      "When I tell you as long as this young man is doing photos he will have a customer for life in my family. Bilal is very respectful, professional, he's able to bring any of your picture dreams to life, he travels and when I say the prices are the best ever, his work definitely speaks for itself.",
  },
]

export default function TestimonialsNew() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-pretty">Love From Our Couples</h2>

        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <p className="font-display text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 italic text-gray-800 leading-relaxed">
              "{TESTIMONIALS[activeIndex].quote}"
            </p>
            <p className="text-center font-bold text-base sm:text-lg text-black">— {TESTIMONIALS[activeIndex].name}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => setActiveIndex(activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1)}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
