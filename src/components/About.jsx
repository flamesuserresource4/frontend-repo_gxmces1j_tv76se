import React from 'react';
import { CheckCircle2, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700">We are a dedicated computer service company focused on secure installs, stable networking, and responsive support. Our certified technicians deliver quick turnaround with meticulous attention to detail.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-700">Same‑day appointments</span>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-700">Secure configurations</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-700">Warranty on work</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-blue-50 to-white">
          <h3 className="text-lg font-semibold text-slate-900">Why choose us?</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
            <li>Fast, professional, and friendly service</li>
            <li>Clear communication and transparent pricing</li>
            <li>On‑site and remote support options</li>
            <li>Trusted by home users and small businesses</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
