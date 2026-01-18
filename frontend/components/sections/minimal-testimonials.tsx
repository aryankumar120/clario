export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Clario transformed how we handle operational data which are insightful.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote: "The explainable AI approach gives us confidence in every decision we make.",
      author: "Michael Rodriguez",
      role: "VP Engineering",
      company: "DataFlow",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote: "Real-time analysis with evidence backing - exactly what we needed.",
      author: "Emily Watson",
      role: "Head of Operations",
      company: "CloudOps",
      image: "/images/testimonial-3.jpg",
    },
    {
      quote: "Clear insights and actionable decisions within minutes. It streamlined our entire workflow.",
      author: "Rajesh Mehta",
      role: "Product Manager",
      company: "FinEdge",
      image: "/images/testimonial-4.jpg",
    },
    {
      quote: "The combination of AI reasoning and evidence tracking gave us confidence in every decision.",
      author: "Sophia Martinez",
      role: "Strategy Lead",
      company: "NovaTech",
      image: "/images/testimonial-5.jpg",
    },
    {
      quote: "It helped our teams align faster and reduced back-and-forth across departments.",
      author: "Daniel Brooks",
      role: "Operations Director",
      company: "ScaleWorks",
      image: "/images/testimonial-6.jpg",
    },

  ];

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--reversed-grey)' }}>
      <div className="container-shell">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'white' }}>
            What Teams Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--jet-black)', 
                border: '1px solid var(--smoked-pearl)',
                boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
                animation: 'fade-in 0.5s ease-out',
                animationDelay: `${idx * 0.06}s`,
              }}
            >
              <p className="text-lg mb-6" style={{ color: 'white' }}>
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold" style={{ color: 'white' }}>{item.author}</p>
                  <p className="text-sm" style={{ color: 'var(--grey-timber)' }}>
                    {item.role} at {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
