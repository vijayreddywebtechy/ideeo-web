'use client';

const clients = [
  'Salesforce', 'AWS', 'Google Cloud', 'Microsoft', 'Oracle',
  'IBM', 'SAP', 'Adobe', 'Stripe', 'Snowflake',
];

export default function ClientsMarquee() {
  return (
    <section className="relative py-10 border-y border-surface-200 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-5">
        <p className="text-muted text-xs font-outfit font-medium uppercase tracking-widest text-center">
          Trusted by innovative companies
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 px-6 py-2.5 rounded-lg border border-surface-200 bg-surface-50 text-body font-outfit font-medium text-sm tracking-wide hover:text-primary hover:border-primary-200 transition-colors duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
