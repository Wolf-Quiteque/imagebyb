"use client"

import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen min-h-[500px] bg-black flex items-center justify-center overflow-hidden pt-16">
      <Image
        src="/images/byb09545.jpeg"
        alt="Hero background - wedding couple with natural golden hour lighting"
        fill
        className="object-cover"
        priority
        style={{ objectPosition: 'top center',}}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-2xl">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-balance leading-tight">
          Start your Photo Journey
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 text-balance max-w-xl mx-auto">
          Capture love and meaningful moments that will make you feel something every time you look back.
        </p>
        <button
          onClick={scrollToContact}
          className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-semibold text-sm sm:text-base"
        >
          Inquire Now
        </button>
      </div>
    </section>
  )
}
