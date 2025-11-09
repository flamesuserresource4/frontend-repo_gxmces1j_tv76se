import React from 'react';

const faqs = [
  {
    q: 'How long does a Windows installation take?',
    a: 'Usually 1–2 hours depending on hardware and data backup needs.'
  },
  {
    q: 'Do you offer on-site service?',
    a: 'Yes, we provide on-site and remote support based on your preference.'
  },
  {
    q: 'Will my files be safe?',
    a: 'We perform safe backups before any major changes and verify integrity after.'
  }
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">FAQs</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group p-6">
              <summary className="cursor-pointer list-none font-medium text-slate-900 flex justify-between items-center">
                {q}
                <span className="ml-4 text-blue-600">+</span>
              </summary>
              <p className="mt-2 text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
