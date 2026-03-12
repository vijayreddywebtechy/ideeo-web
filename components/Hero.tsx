'use client';

import { useState, useEffect } from 'react';

const typingWords = [
  'AI & Machine Learning',
  'Salesforce Solutions',
  'Web & Mobile Apps',
  'Enterprise IT',
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const stats = [
    { value: '150+', label: 'Projects' },
    { value: '50+', label: 'Engineers' },
    { value: '12+', label: 'Industries' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-surface-50">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left column */}
          <div className="lg:col-span-3">
            <div className="section-tag mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>AI-First Software Company</span>
            </div>

            <h1 className="font-syne font-bold text-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6">
              We Build{' '}
              <span className="gradient-text">Intelligent Software</span>{' '}
              That Scales
            </h1>

            <p className="font-outfit font-light text-lg text-body max-w-xl mb-4 leading-relaxed">
              IdeeoTech Solutions delivers cutting-edge software engineering across AI/ML,
              Salesforce, and full-stack development — transforming complex business challenges
              into elegant, scalable digital solutions.
            </p>

            {/* Typing effect */}
            <div className="font-outfit text-lg text-primary mb-8 h-7">
              <span className="text-body">We specialize in </span>
              <span className="font-semibold typing-cursor">{displayText}</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#services" className="btn-primary inline-flex items-center gap-2">
                Explore Services
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#projects" className="btn-outline inline-flex items-center gap-2">
                View Our Work
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-syne font-bold text-2xl lg:text-3xl gradient-text">
                    {stat.value}
                  </div>
                  <div className="font-outfit text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — animated illustration */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow-lg">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>

              {/* Orbiting nodes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit">
                <div className="w-10 h-10 rounded-xl bg-surface dark:bg-surface-100 border border-surface-200 shadow-card flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4m-9-9h4m14 0h4m-3.3-7.7l-2.8 2.8m-9.8 9.8l-2.8 2.8m0-15.6l2.8 2.8m9.8 9.8l2.8 2.8"/>
                  </svg>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse">
                <div className="w-10 h-10 rounded-xl bg-surface dark:bg-surface-100 border border-surface-200 shadow-card flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  </svg>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-surface dark:bg-surface-100 border border-surface-200 shadow-card flex items-center justify-center animate-float">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                  <path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4zM10 17h4m-3 3h2"/>
                </svg>
              </div>

              <div className="absolute bottom-8 left-4 w-14 h-14 rounded-2xl bg-surface dark:bg-surface-100 border border-surface-200 shadow-card flex items-center justify-center animate-float-delayed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>

              <div className="absolute top-8 left-0 w-12 h-12 rounded-full bg-surface dark:bg-surface-100 border border-surface-200 shadow-card flex items-center justify-center animate-float-slow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>

              <div className="absolute bottom-4 right-8 w-12 h-12 rounded-full bg-surface dark:bg-surface-100 border border-surface-200 shadow-card flex items-center justify-center animate-float">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"/>
                </svg>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 320 320">
                <line x1="160" y1="160" x2="280" y2="40" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="160" y1="160" x2="40" y2="260" stroke="#7C3AED" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="160" y1="160" x2="30" y2="60" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4"/>
                <line x1="160" y1="160" x2="270" y2="270" stroke="#A78BFA" strokeWidth="1" strokeDasharray="4 4"/>
                <circle cx="160" cy="160" r="80" stroke="#2563EB" strokeWidth="0.5" fill="none" strokeDasharray="4 8"/>
                <circle cx="160" cy="160" r="120" stroke="#7C3AED" strokeWidth="0.5" fill="none" strokeDasharray="4 8"/>
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator — hidden on mobile/tablet, centered on desktop */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-muted text-xs font-outfit">Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" className="text-muted" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
