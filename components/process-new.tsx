"use client"

export default function ProcessNew() {
  const steps = [
    {
      number: "1",
      title: "Reach Out",
      description: "Submit your inquiry. We'll take it from there and discuss your vision.",
    },
    {
      number: "2",
      title: "Build the Vision",
      description:
        "We'll schedule a call to get to know you, create a vision board, and map out the shots that matter most.",
    },
    {
      number: "3",
      title: "Lock It In",
      description: "Once you're ready, we'll send the contract and deposit info to secure your date.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-pretty">Let's Create Your Story</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="font-display text-5xl sm:text-6xl font-bold mb-3 sm:mb-4 text-gray-400">{step.number}</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
