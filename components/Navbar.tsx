'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['home', 'about', 'services', 'solutions', 'projects', 'tech-stack', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#projects', label: 'Projects' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl shadow-sm border-b border-surface-200 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="relative z-[60] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="transition-transform duration-300 group-hover:scale-110">
            <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
            <path d="M10 18L18 10L26 18L18 26Z" fill="#FFFFFF" fillOpacity="0.9" />
            <path d="M14 18L18 14L22 18L18 22Z" fill="#2563EB" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
                <stop stopColor="#2563EB" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-syne font-bold text-xl text-heading">
            IDEEO<span className="gradient-text">Tech</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-outfit font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary bg-primary-50'
                  : 'text-body hover:text-heading hover:bg-surface-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl bg-surface-100 border border-surface-200 flex items-center justify-center text-body hover:text-heading hover:bg-surface-200 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-surface/[0.98] backdrop-blur-xl transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-syne font-bold text-heading hover:text-primary transition-all duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            Get Free Consultation
          </a>
          <button
            onClick={toggleTheme}
            className="mt-4 w-11 h-11 rounded-xl bg-surface-100 border border-surface-200 flex items-center justify-center text-body hover:text-heading transition-all duration-300"
            aria-label="Toggle theme"
            style={{
              transitionDelay: mobileOpen ? `${(navLinks.length + 1) * 80}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
