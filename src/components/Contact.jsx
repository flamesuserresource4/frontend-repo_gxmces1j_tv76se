import React, { useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will contact you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us</h2>
            <p className="mt-3 text-slate-600">Need help now? Reach us via WhatsApp or send a quick message.</p>

            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/1234567890?text=I%20need%20computer%20service%20support"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                <MessageSquare className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="h-4 w-4" /> <a href="tel:+10000000000" className="hover:text-blue-600">+1 (000) 000-0000</a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="h-4 w-4" /> support@protech-services.com
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-500">Keywords: Windows installation service, software setup, local network repair, computer maintenance</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service Needed</label>
                <select className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>Windows Installation</option>
                  <option>Driver & Software Setup</option>
                  <option>Local Network Setup / Repair</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Briefly describe the issue..." />
              </div>
              <button type="submit" className="mt-2 inline-flex justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">Send Request</button>
              {status && <p className="text-green-600 text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
