"use client"

import { useState } from "react"
import Image from "next/image"

const PORTFOLIO_DATA = {
  weddings: [
    { id: 1, type: "photo", src: "/images/byb02575.jpeg" },
    { id: 2, type: "photo", src: "/images/img-5777.jpeg" },
    { id: 3, type: "photo", src: "/images/byb07442.jpeg" },
    { id: 4, type: "photo", src: "/images/img-5776.png" },
    { id: 5, type: "photo", src: "/images/byb06670.jpeg" },
    { id: 6, type: "photo", src: "/images/byb06591.jpeg" },
    { id: 7, type: "photo", src: "/images/byb01952.jpeg" },
    { id: 8, type: "photo", src: "/images/byb01454.jpeg" },
    { id: 9, type: "photo", src: "/images/byb09861.jpeg" },
    { id: 10, type: "photo", src: "/images/byb06592.jpeg" },
  ],
  couples: [
    { id: 1, type: "photo", src: "/images/together-forever/img-5782.jpeg" },
    { id: 2, type: "photo", src: "/images/together-forever/img-5781.png" },
    { id: 3, type: "photo", src: "/images/together-forever/img-9487.jpeg" },
    { id: 4, type: "photo", src: "/images/together-forever/dsc04625.jpeg" },
    { id: 5, type: "photo", src: "/images/together-forever/byb00579.jpeg" },
    { id: 6, type: "photo", src: "/images/together-forever/byb00467.jpeg" },
    { id: 7, type: "photo", src: "/images/together-forever/img-5780.png" },
    { id: 8, type: "photo", src: "/images/together-forever/img-5481.jpeg" },
    { id: 9, type: "photo", src: "/images/together-forever/dsc02236-enhanced-nr.jpeg" },
    { id: 10, type: "photo", src: "/images/together-forever/dsc01981-enhanced-nr.jpeg" },
  ],
}

type Category = "weddings" | "couples"

export default function PortfolioNew() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("weddings")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const toggleCategory = (category: Category) => {
    setSelectedCategory(category)
    setSelectedImageIndex(0)
  }

  const switchCategory = (newCategory: Category) => {
    setSelectedCategory(newCategory)
    setSelectedImageIndex(0)
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-pretty">Our Work</h2>

        {selectedImageIndex === null ? (
          <>
            {/* Category Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <button
                onClick={() => toggleCategory("weddings")}
                className="relative group cursor-pointer h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden"
                aria-label="View Weddings portfolio"
              >
                <Image
                  src="/images/img-5777.jpeg"
                  alt="Weddings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">Weddings</h3>
                </div>
              </button>

              <button
                onClick={() => toggleCategory("couples")}
                className="relative group cursor-pointer h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden"
                aria-label="View Together Forever Sessions portfolio"
              >
                <Image
                  src="/images/together-forever/img-5780.png"
                  alt="Together Forever Sessions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center leading-tight">
                    Together Forever
                    <br />
                    Session
                  </h3>
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Gallery View */}
            <div className="max-w-5xl mx-auto">
              {/* Main Image Display with black background to prevent cropping */}
              <div className="relative w-full bg-black rounded-lg overflow-hidden mb-6 sm:mb-8">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <Image
                    src={PORTFOLIO_DATA[selectedCategory][selectedImageIndex].src || "/placeholder.svg"}
                    alt={`${selectedCategory} portfolio image ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      selectedImageIndex === 0 ? PORTFOLIO_DATA[selectedCategory].length - 1 : selectedImageIndex - 1,
                    )
                  }
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() =>
                    setSelectedImageIndex(
                      selectedImageIndex === PORTFOLIO_DATA[selectedCategory].length - 1 ? 0 : selectedImageIndex + 1,
                    )
                  }
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all z-10"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/60 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-sm sm:text-base">
                  {selectedImageIndex + 1} / {PORTFOLIO_DATA[selectedCategory].length}
                </div>
              </div>

              {/* Category Navigation */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                  {selectedCategory === "weddings" ? "Weddings" : "Together Forever Sessions"}
                </h3>

                <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => switchCategory("weddings")}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                      selectedCategory === "weddings"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    Weddings
                  </button>
                  <button
                    onClick={() => switchCategory("couples")}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                      selectedCategory === "couples"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    Together Forever
                  </button>
                </div>
              </div>

              {/* Thumbnail Grid - Responsive columns */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
                {PORTFOLIO_DATA[selectedCategory].map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index ? "border-black" : "border-gray-300 hover:border-gray-400"
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-current={selectedImageIndex === index}
                  >
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Back Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="mt-6 sm:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors w-full sm:w-auto text-sm sm:text-base"
              >
                ← Back to Categories
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
