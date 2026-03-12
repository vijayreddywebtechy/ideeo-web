'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="counter-value font-syne font-bold text-3xl lg:text-4xl gradient-text">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { target: 150, suffix: '+', label: 'Projects Delivered' },
  { target: 50, suffix: '+', label: 'Expert Engineers' },
  { target: 8, suffix: '+', label: 'Years of Excellence' },
  { target: 12, suffix: '+', label: 'Industries Served' },
];

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
        <path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4zM10 17h4m-3 3h2"/>
      </svg>
    ),
    title: 'Innovation',
    desc: 'Pioneering solutions with cutting-edge AI, cloud, and automation technologies.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Reliability',
    desc: 'Enterprise-grade systems built for 99.99% uptime and mission-critical performance.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    title: 'Scalability',
    desc: 'Architectures designed to grow seamlessly from MVP to millions of users.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="fade-in-section">
            <div className="section-tag mb-4">Who We Are</div>
            <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-6">
              Engineering the Future of{' '}
              <span className="gradient-text">Digital Enterprise</span>
            </h2>
            <div className="space-y-4 text-body font-outfit font-light leading-relaxed">
              <p>
                IdeeoTech Solutions is a premium software engineering firm founded on the belief
                that technology should amplify human potential. We partner with ambitious organizations
                to design, build, and scale intelligent software systems.
              </p>
              <p>
                Our vision is to become the most trusted technology partner for enterprises
                navigating digital transformation — delivering solutions that are not just
                technically excellent, but strategically impactful.
              </p>
              <p>
                With a team-first approach and deep expertise across AI/ML, Salesforce, and
                full-stack development, we bring a rare combination of technical depth and
                business acumen to every engagement.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-primary font-outfit font-medium text-sm hover:gap-3 transition-all duration-300"
            >
              Meet Our Team
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-6 text-center fade-in-section shadow-card">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <p className="text-muted text-sm font-outfit mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card-hover p-6 flex items-start gap-4 fade-in-section shadow-card">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-syne font-bold text-heading text-lg mb-1">{pillar.title}</h3>
                <p className="text-body font-outfit text-sm font-light">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
