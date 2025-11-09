import React from 'react';

const tiers = [
  {
    name: 'Basic Setup',
    price: '$49',
    desc: 'For fresh installs and quick tune‑ups.',
    features: ['Windows install/upgrade', 'Essential drivers', 'Security & updates']
  },
  {
    name: 'Pro Care',
    price: '$89',
    desc: 'Everything in Basic plus software suite.',
    features: ['Office & essentials', 'Browser & utilities', 'Performance tweaks']
  },
  {
    name: 'Network Plus',
    price: '$119',
    desc: 'For homes/offices that need networking.',
    features: ['Router & Wi‑Fi setup', 'Printer/NAS sharing', 'Troubleshooting']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Transparent Pricing</h2>
          <p className="mt-3 text-slate-600">Simple packages with no hidden fees. Custom business quotes available.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map(t => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
              <div className="mt-4 text-3xl font-bold text-blue-600">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
