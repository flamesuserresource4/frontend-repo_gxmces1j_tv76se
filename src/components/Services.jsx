import React from 'react';
import { Monitor, Network, Download } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Windows Installation (All Versions)',
    desc: 'Clean installs, upgrades, activation help, and performance optimization for Windows 7, 8, 10, and 11.',
    bullets: ['Data backup & restore', 'Driver setup', 'Security hardening']
  },
  {
    icon: Download,
    title: 'Driver & Software Installation',
    desc: 'We install essential drivers and productivity tools, browsers, office suites, and antivirus — all configured properly.',
    bullets: ['Latest drivers', 'Verified installers', 'Update & patching']
  },
  {
    icon: Network,
    title: 'Local Network Setup & Maintenance',
    desc: 'LAN and Wi‑Fi configuration, router setup, printer sharing, and troubleshooting for seamless connectivity.',
    bullets: ['Wi‑Fi optimization', 'Printer & NAS sharing', 'On‑site & remote support']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Reliable computer services for homes and offices — delivered fast with professional care.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-10 w-10 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                {bullets.map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
