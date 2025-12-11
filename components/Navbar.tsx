import React, { useState, useEffect } from 'react';
import { Camera, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Camera className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-sm tracking-widest text-gray-300 group-hover:text-white transition-colors font-medium">FOCUS MEDIA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {['Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button className="hidden md:flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all border border-white/10">
          <Sparkles className="w-4 h-4" />
          <span>Get Template</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;