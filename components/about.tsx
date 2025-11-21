export default function About() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className="h-96 bg-cover bg-center rounded"
            style={{
              backgroundImage: "url('/images/img-2726.png')",
            }}
          />

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Wedding Photography That Honors Your "Together Forever."
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                At ImageryBYB, we capture love and meaningful moments for those who want to feel something every time
                they look back. Based in Houston, Texas, our mission is simple: to give you more than photos and to give
                you proof that what you have is real.
              </p>
              <p>
                The way you laugh together, hold each other, exist together. That's what we're here for. Forever starts
                here.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold">Bilal Gilbert</h3>
              <p className="text-gray-400 mt-2">Founder & Lead Photographer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
