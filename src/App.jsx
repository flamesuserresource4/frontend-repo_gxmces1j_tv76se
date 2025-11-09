import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-slate-800">
      <Navbar />
      <main>
        {/* Hero with Spline cover background */}
        <Hero />
        {/* Core sections showcasing offerings and value */}
        <Services />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} ProTech Computer Services. All rights reserved.</p>
          <div className="text-sm text-slate-500">Windows installation service · software setup · local network repair · computer maintenance</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
