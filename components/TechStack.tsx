'use client';

import { useState } from 'react';

const tabs = [
  {
    id: 'ai',
    label: 'AI/ML',
    techs: [
      { name: 'TensorFlow', color: '#FF6F00' },
      { name: 'PyTorch', color: '#EE4C2C' },
      { name: 'OpenAI', color: '#10A37F' },
      { name: 'LangChain', color: '#1C3C3C' },
      { name: 'Hugging Face', color: '#FFD21E' },
      { name: 'scikit-learn', color: '#F7931E' },
      { name: 'Pandas', color: '#150458' },
      { name: 'Jupyter', color: '#F37626' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    techs: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#0F172A' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Vue.js', color: '#4FC08D' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    techs: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Java', color: '#ED8B00' },
      { name: 'Go', color: '#00ADD8' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Redis', color: '#DC382D' },
      { name: 'GraphQL', color: '#E10098' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    techs: [
      { name: 'AWS', color: '#FF9900' },
      { name: 'Azure', color: '#0078D4' },
      { name: 'GCP', color: '#4285F4' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Kubernetes', color: '#326CE5' },
      { name: 'Terraform', color: '#7B42BC' },
    ],
  },
  {
    id: 'salesforce',
    label: 'Salesforce',
    techs: [
      { name: 'Apex', color: '#1B96FF' },
      { name: 'LWC', color: '#00A1E0' },
      { name: 'Sales Cloud', color: '#00A1E0' },
      { name: 'Service Cloud', color: '#00A1E0' },
      { name: 'MuleSoft', color: '#00A1E0' },
      { name: 'Tableau', color: '#E97627' },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('ai');

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="tech-stack" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="section-tag mx-auto mb-4">Our Stack</div>
          <h2 className="font-syne font-bold text-heading text-3xl lg:text-5xl mb-4">
            Powered by <span className="gradient-text">World-Class Technology</span>
          </h2>
          <p className="text-body font-outfit font-light text-lg max-w-2xl mx-auto">
            We leverage the most powerful tools and frameworks to deliver exceptional results.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-section">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-outfit font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-surface-100 text-body hover:bg-surface-200 border border-surface-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 fade-in-section">
          {currentTab.techs.map((tech) => (
            <div
              key={tech.name}
              className="card p-5 flex flex-col items-center gap-3 group hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 cursor-default shadow-card"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-syne font-bold transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${tech.color}12`,
                  color: tech.color,
                }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-sm font-outfit text-body group-hover:text-heading transition-colors duration-300 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
