"use client"

import Image from "next/image"

export default function AboutNew() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-pretty">
              Wedding Photography That Honors Your "Together Forever"
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              At ImageryBYB, we capture love and meaningful moments for those who want to feel something every time they
              look back. Based in Houston, Texas, our mission is simple: to give you more than photos and to give you
              proof that what you have is real.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              The way you laugh together, hold each other, exist together. That's what we're here for. Forever starts
              here.
            </p>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/images/photographer-portrait.jpeg"
              alt="Bilal Gilbert - Photographer"
              fill
              className="object-cover md:object-center object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
