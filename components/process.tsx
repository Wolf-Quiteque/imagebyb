export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Reach Out",
      description: "Submit your inquiry. We'll take it from there.",
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
    <section className="bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Let's Create Your Story</h2>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <h3 className="text-2xl font-bold mb-3">
                Step {step.number}: {step.title}
              </h3>
              <p className="text-lg text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
