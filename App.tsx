import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import QuoteButton from './components/QuoteButton';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
      </main>
      <Footer />
      <QuoteButton />
    </div>
  );
}

export default App;