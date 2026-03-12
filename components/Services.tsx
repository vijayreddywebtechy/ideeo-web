'use client';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4z"/>
        <path d="M9 18h6M10 22h4"/>
        <path d="M4 12h1m14 0h1M6.3 6.3l.7.7m10-.7l-.7.7"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Build intelligent systems with custom LLMs, computer vision, NLP, and predictive analytics that transform raw data into actionable business insights.',
    tags: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
    color: '#2563EB',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>
      </svg>
    ),
    title: 'Salesforce Development',
    desc: 'End-to-end Salesforce implementations across Sales, Service, and Marketing Cloud with custom Apex development, LWC components, and seamless integrations.',
    tags: ['Apex', 'LWC', 'Sales Cloud', 'MuleSoft'],
    color: '#0891B2',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v14H3z" strokeLinejoin="round"/>
        <path d="M7 21h10M12 17v4"/>
        <path d="M8 8l3 3-3 3m5 0h3"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'High-performance web applications built with modern frameworks, server-side rendering, and pixel-perfect responsive design for exceptional user experiences.',
    tags: ['React', 'Next.js', 'Angular', 'TypeScript'],
    color: '#7C3AED',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <path d="M12 18h.01"/>
        <path d="M9 6h6"/>
      </svg>
    ),
    title: 'Mobile Development',
    desc: 'Native and cross-platform mobile applications delivering fluid animations, offline-first architecture, and seamless device integration.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#059669',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L2 12h3v8h6v-5h2v5h6v-8h3L12 3z"/>
        <path d="M9 12h6"/>
      </svg>
    ),
    title: 'Product Engineering',
    desc: 'From MVP to enterprise scale — we architect and build SaaS platforms, microservices ecosystems, and complex product lines with continuous delivery.',
    tags: ['Microservices', 'SaaS', 'Docker', 'K8s'],
    color: '#D97706',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
    title: 'IT Consulting & Enterprise',
    desc: 'Strategic technology consulting covering enterprise architecture, cloud migration, DevOps transformation, and digital modernization roadmaps.',
    tags: ['AWS', 'Azure', 'DevOps', 'Architecture'],
    color: '#DC2626',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="section-tag mx-auto mb-4">What We Build</div>
          <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-4">
            End-to-End <span className="gradient-text">Technology Services</span>
          </h2>
          <p className="text-body font-outfit font-light text-lg max-w-2xl mx-auto">
            We deliver comprehensive software solutions across every layer of the technology stack,
            from intelligent AI systems to robust enterprise platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover p-7 group fade-in-section shadow-card"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: `${service.color}10`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>
              <h3 className="font-syne font-bold text-heading text-xl mb-3">{service.title}</h3>
              <p className="text-body font-outfit font-light text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-outfit font-medium bg-surface-100 text-body border border-surface-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-outfit font-medium group-hover:gap-2.5 transition-all duration-300"
              >
                Learn More
                <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
