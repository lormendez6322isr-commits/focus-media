import React from 'react';
import { Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-sm text-gray-300">Crafting Unique Brand Identities</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Capturing Moments,<br />
          <span className="text-white">Building Brands</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed">
          Elevate your brand with photography and digital design — powerful visuals, custom websites, and media that tells your story.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-3.5 rounded-xl bg-transparent border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium min-w-[160px]">
            Photography
          </button>
          <button className="px-8 py-3.5 rounded-xl bg-transparent border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium min-w-[160px]">
            Digital Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-4 text-sm text-gray-500">
        <span>Scroll down</span>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <Mouse className="w-5 h-5 animate-bounce text-gray-400" />
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <span>to see how</span>
      </div>
    </section>
  );
};

export default Hero;