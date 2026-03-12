'use client';

const solutions = [
  {
    accent: '#2563EB',
    accentLight: '#EFF6FF',
    title: 'Enterprise Digital Transformation',
    desc: 'Modernize legacy systems and accelerate your digital journey with end-to-end transformation strategies.',
    features: [
      'Legacy system modernization & migration',
      'Process automation & workflow optimization',
      'Data-driven decision making frameworks',
      'Change management & adoption strategy',
    ],
  },
  {
    accent: '#7C3AED',
    accentLight: '#F5F3FF',
    title: 'AI-Powered Applications',
    desc: 'Harness the power of artificial intelligence to build products that learn, adapt, and deliver unprecedented value.',
    features: [
      'Custom LLM fine-tuning & deployment',
      'Intelligent document processing & extraction',
      'Predictive analytics & forecasting engines',
      'Conversational AI & chatbot platforms',
    ],
  },
  {
    accent: '#0891B2',
    accentLight: '#ECFEFF',
    title: 'Cloud-Native Platforms',
    desc: 'Build resilient, auto-scaling cloud infrastructure that delivers exceptional performance at any scale.',
    features: [
      'Kubernetes orchestration & service mesh',
      'Serverless architecture & event-driven systems',
      'Multi-cloud strategy & cost optimization',
      'CI/CD pipelines & infrastructure as code',
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="section-tag mx-auto mb-4">Solutions</div>
          <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-4">
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-body font-outfit font-light text-lg max-w-2xl mx-auto">
            Scalable solutions engineered for the unique challenges of modern enterprises
            across healthcare, finance, manufacturing, and beyond.
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="card-hover overflow-hidden fade-in-section shadow-card"
            >
              <div className="p-8 lg:p-10 relative">
                {/* Subtle accent stripe on left */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: solution.accent }}
                />
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="font-syne font-bold text-heading text-2xl lg:text-3xl mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-body font-outfit font-light mb-6">{solution.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-body font-outfit text-sm">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 8l3 3 5-5" stroke={solution.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-outfit font-medium transition-all duration-300 hover:gap-3"
                      style={{ color: solution.accent }}
                    >
                      Explore Solution
                      <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-2xl flex items-center justify-center"
                      style={{ background: solution.accentLight }}
                    >
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={solution.accent} strokeWidth="1" opacity="0.6">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
