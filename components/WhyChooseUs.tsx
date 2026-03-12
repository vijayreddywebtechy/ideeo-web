'use client';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
        <path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4zM10 17h4m-3 3h2"/>
        <path d="M4 12h1m14 0h1M6.3 6.3l.7.7m10-.7l-.7.7"/>
      </svg>
    ),
    title: 'Deep AI Expertise',
    desc: 'Our AI/ML team includes PhDs and practitioners with deep expertise in LLMs, computer vision, and reinforcement learning deployed at enterprise scale.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Salesforce Gold Partner',
    desc: 'Certified Salesforce Gold Partner with 200+ successful implementations across Sales, Service, Marketing Cloud, and complex CPQ deployments.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Agile Delivery',
    desc: 'Two-week sprint cycles with continuous delivery, daily standups, and full transparency. Every project ships on time with predictable velocity.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Round-the-clock monitoring and support with dedicated account managers, SLA guarantees, and proactive incident response across all time zones.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-50/60 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-50/60 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="section-tag mb-4 fade-in-section">Why IdeeoTech</div>
            <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-12 fade-in-section">
              Why <span className="gradient-text">150+ Companies</span> Choose IdeeoTech
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 fade-in-section">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-50 border border-surface-200 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-heading text-base mb-1.5">{f.title}</h3>
                    <p className="text-body font-outfit text-sm font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="text-[180px] font-syne font-bold leading-none gradient-text opacity-[0.06] select-none">
                150+
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-syne font-bold text-4xl gradient-text">150+</div>
                  <div className="font-outfit text-muted text-sm mt-1">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
