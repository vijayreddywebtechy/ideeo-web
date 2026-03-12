'use client';

const testimonials = [
  {
    text: 'IdeeoTech transformed our entire data infrastructure with their AI platform. The predictive analytics capabilities they built have directly contributed to a 30% improvement in our operational efficiency. Their team is technically brilliant and a pleasure to work with.',
    name: 'Sarah Mitchell',
    title: 'CTO',
    company: 'HealthFirst Systems',
    initials: 'SM',
    color: '#2563EB',
  },
  {
    text: 'The Salesforce CPQ implementation IdeeoTech delivered was flawless. They understood our complex pricing models from day one and built a solution that cut our quoting time by 60%. Their Salesforce expertise is genuinely world-class.',
    name: 'James Rodriguez',
    title: 'VP of Sales Operations',
    company: 'Apex Manufacturing',
    initials: 'JR',
    color: '#7C3AED',
  },
  {
    text: 'We hired IdeeoTech to build our real-time trading dashboard and they exceeded every expectation. Sub-second latency, beautiful UI, rock-solid infrastructure. They are our go-to technology partner for every new initiative.',
    name: 'Emily Chen',
    title: 'Head of Engineering',
    company: 'FinVault Technologies',
    initials: 'EC',
    color: '#0891B2',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="section-tag mx-auto mb-4">Client Stories</div>
          <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-7 flex flex-col fade-in-section shadow-card">
              {/* Quote mark */}
              <div className="text-5xl font-syne font-bold leading-none mb-4 gradient-text opacity-30">
                &ldquo;
              </div>
              <p className="text-body font-outfit font-light text-sm leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              {/* Stars */}
              <div className="star-rating text-sm mb-4">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-200">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-outfit font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-outfit font-semibold text-heading text-sm">{t.name}</div>
                  <div className="text-muted font-outfit text-xs">
                    {t.title}, {t.company}
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
