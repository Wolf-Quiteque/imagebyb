export default function Portfolio() {
  const services = [
    {
      title: "Weddings",
      image: "url('/images/img-2727.png')",
    },
    {
      title: "Together Forever Session",
      image: "url('/images/img-2727.png')",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">ImageryBYB Portfolio</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative h-96 bg-cover bg-center group overflow-hidden rounded"
            style={{ backgroundImage: service.image }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 bg-black p-6">
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
