import React from 'react';
import { Shield, Phone, MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-slate-900">ProTech Computer Services</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:+10000000000"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call Us</span>
            </a>
            <a
              href="https://wa.me/1234567890?text=I%20need%20computer%20service%20support"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">Request Service</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
