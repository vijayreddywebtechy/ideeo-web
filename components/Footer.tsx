'use client';

import { FormEvent, useState } from 'react';

const serviceLinks = [
  'AI & Machine Learning',
  'Salesforce Development',
  'Web Development',
  'Mobile Development',
  'Product Engineering',
  'IT Consulting',
];

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative pt-20 pb-8 bg-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Logo & description */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="10" fill="url(#footerLogoGrad)" />
                <path d="M10 18L18 10L26 18L18 26Z" fill="#FFFFFF" fillOpacity="0.9" />
                <path d="M14 18L18 14L22 18L18 22Z" fill="#2563EB" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-syne font-bold text-lg text-white">
                IDEEO<span className="text-primary-300">Tech</span>
              </span>
            </a>
            <p className="text-slate-400 font-outfit font-light text-sm leading-relaxed mb-4">
              Intelligent Solutions. Infinite Possibilities. Engineering the future of digital enterprise.
            </p>
            <div className="flex gap-3">
              {['Li', 'Gh', 'Tw', 'Dr'].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-xs font-outfit font-bold hover:bg-primary/20 hover:border-primary/30 hover:text-primary-300 transition-all duration-300"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-syne font-bold text-sm text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-slate-400 font-outfit text-sm hover:text-primary-300 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-syne font-bold text-sm text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 font-outfit text-sm hover:text-primary-300 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-syne font-bold text-sm text-white mb-4">Stay Updated</h4>
            <p className="text-slate-400 font-outfit text-sm mb-3">
              Get the latest insights on AI, cloud, and enterprise tech.
            </p>
            {subscribed ? (
              <p className="text-emerald-400 font-outfit text-sm">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-outfit text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-slate-500"
                />
                <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-outfit font-medium hover:bg-primary-600 transition-colors">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-outfit text-xs">
            &copy; 2024 IdeeoTech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-slate-500 font-outfit text-xs hover:text-slate-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
