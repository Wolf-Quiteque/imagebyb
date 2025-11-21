"use client"

export default function Services() {
  const services = [
    {
      title: "Weddings",
      description: 'Capture your special day with stunning photography that honors your "Together Forever" story.',
      includes: ["Engagement shoot", "Full day coverage", "Professional editing"],
    },
    {
      title: "Together Forever Session",
      description: "Couples and engagement sessions designed to celebrate your love and connection.",
      includes: ["1-2 hour session", "Multiple locations", "Digital gallery access"],
    },
    {
      title: "Events",
      description: "Professional photography for corporate events, conferences, and special celebrations.",
      includes: ["Full event coverage", "Multiple photographers", "Same-day highlights"],
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-pretty">Our Services</h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base px-4">
          We offer a range of photography services designed to capture the moments that matter most to you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-black transition-colors hover:shadow-lg"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
