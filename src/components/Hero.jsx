import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200">
            Fast & Reliable Computer Setup for Your Home or Office
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            We Bring Your Computer Back to Life – Fast, Secure, and Fully Updated!
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Professional Windows installation, software setup, and local network maintenance. Trusted by home users and small businesses.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow"
            >
              Request Service
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Explore Services
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            SEO: Windows installation service, software setup, local network repair, computer maintenance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
