'use client';

const projects = [
  {
    accent: '#2563EB',
    industry: 'Healthcare',
    title: 'AI-Powered Patient Analytics Platform',
    desc: 'Built an end-to-end patient analytics platform that leverages machine learning to predict health outcomes and optimize treatment pathways for a leading hospital network.',
    tags: ['TensorFlow', 'React', 'AWS', 'Python'],
    metric: '40% faster diagnostics',
  },
  {
    accent: '#7C3AED',
    industry: 'Manufacturing',
    title: 'Salesforce CPQ Implementation',
    desc: 'Delivered a comprehensive Salesforce CPQ solution for a Fortune 500 manufacturer, streamlining their quote-to-cash process and reducing sales cycle time dramatically.',
    tags: ['Apex', 'LWC', 'Sales Cloud', 'CPQ'],
    metric: '60% faster quoting',
  },
  {
    accent: '#0891B2',
    industry: 'FinTech',
    title: 'Real-Time FinTech SaaS Dashboard',
    desc: 'Designed and engineered a real-time financial analytics dashboard processing millions of transactions daily with sub-second latency and enterprise-grade security.',
    tags: ['Next.js', 'Node.js', 'GCP', 'PostgreSQL'],
    metric: '3x throughput increase',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="section-tag mx-auto mb-4">Our Work</div>
          <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-4">
            Projects That <span className="gradient-text">Define Us</span>
          </h2>
          <p className="text-body font-outfit font-light text-lg max-w-2xl mx-auto">
            A glimpse into the high-impact solutions we&apos;ve delivered for industry-leading organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card-hover overflow-hidden fade-in-section shadow-card">
              {/* Accent bar */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

              <div className="p-7">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-outfit font-medium mb-4"
                  style={{
                    background: `${project.accent}10`,
                    color: project.accent,
                    border: `1px solid ${project.accent}25`,
                  }}
                >
                  {project.industry}
                </span>

                <h3 className="font-syne font-bold text-heading text-lg mb-3">{project.title}</h3>
                <p className="text-body font-outfit font-light text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-outfit font-medium bg-surface-100 text-body border border-surface-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-surface-200">
                  <span className="text-sm font-outfit font-semibold" style={{ color: project.accent }}>
                    {project.metric}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-muted text-sm font-outfit hover:text-primary transition-colors duration-300"
                  >
                    View Case Study
                    <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
