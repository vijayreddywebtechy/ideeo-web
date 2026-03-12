'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="section-tag mx-auto mb-4">Get In Touch</div>
          <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-4">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="fade-in-section space-y-8">
            <div>
              <h3 className="font-syne font-bold text-heading text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:hello@ideeotechsolutions.com" className="flex items-center gap-3 text-body font-outfit hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                  </div>
                  hello@ideeotechsolutions.com
                </a>
                <div className="flex items-center gap-3 text-body font-outfit">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  +1 (555) 987-6543
                </div>
                <div className="flex items-center gap-3 text-body font-outfit">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  San Francisco, CA &middot; New York, NY &middot; London, UK
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-outfit font-semibold text-sm text-muted mb-3">Connect with us</h4>
              <div className="flex gap-3">
                {[
                  { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
                  { label: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                  { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { label: 'Dribbble', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 5.6a8.5 8.5 0 011.35 4.72c-2-.4-4.18-.5-6.22-.24A21 21 0 0012.5 9.5a17.6 17.6 0 004.52-3.5l1.58 1.6zM12 3.5a8.46 8.46 0 015.65 2.15A16.08 16.08 0 0113.5 9a67 67 0 00-2.3-4.87A8.5 8.5 0 0112 3.5z' },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-10 h-10 rounded-xl bg-surface-100 border border-surface-200 flex items-center justify-center text-muted hover:bg-primary-50 hover:border-primary-200 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={social.path}/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-surface-200 shadow-card">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-outfit text-body">Currently accepting new projects</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="card p-6 lg:p-8 fade-in-section shadow-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-syne font-bold text-heading text-xl mb-2">Message Sent!</h3>
                <p className="text-body font-outfit text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-outfit font-medium text-heading mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-heading font-outfit text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-outfit font-medium text-heading mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-heading font-outfit text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-outfit font-medium text-heading mb-1.5">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-heading font-outfit text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-outfit font-medium text-heading mb-1.5">Service Interested In</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-body font-outfit text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-colors appearance-none">
                      <option value="">Select a service</option>
                      <option>AI & Machine Learning</option>
                      <option>Salesforce Development</option>
                      <option>Web Development</option>
                      <option>Mobile Development</option>
                      <option>Product Engineering</option>
                      <option>IT Consulting & Enterprise</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-outfit font-medium text-heading mb-1.5">Project Budget</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-body font-outfit text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-colors appearance-none">
                      <option value="">Select budget range</option>
                      <option>&lt;$10k</option>
                      <option>$10k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-outfit font-medium text-heading mb-1.5">Message *</label>
                  <textarea
                    required
                    minLength={10}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-surface-50 border border-surface-200 text-heading font-outfit text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"/>
                    </svg>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
