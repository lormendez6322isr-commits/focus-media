import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
             <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-white/50"></span>
                <span className="uppercase text-xs tracking-widest text-gray-400">The Studio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">Meet Focus Media</h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Focus Media is a creative studio built by husband-and-wife team Israel and Valentina, two artists who bring together a shared passion for visual storytelling.
              </p>
              <p>
                Israel brings a sharp eye for detail and modern digital solutions, while Valentina brings a natural talent for capturing emotion through photography. Together, we blend technical skill with artistic vision to deliver high-quality photography and digital services that help individuals and businesses stand out.
              </p>
              <p>
                Every project is personal to us — crafted with care, authenticity, and a commitment to excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              {['Photoshoots', 'Photoshop', 'Brand Identity Design', 'UX Design', 'Branding', 'Website Design', 'Figma'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 text-sm text-gray-300 border border-white/5 hover:border-white/20 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-12 border-t border-white/10">
              <div className="text-center">
                <span className="block text-gray-500 text-sm mb-1">Freelance</span>
                <span className="text-white">Available</span>
              </div>
              <div className="text-center">
                <span className="block text-gray-500 text-sm mb-1">Focus Media</span>
                <span className="text-white">Since 2023</span>
              </div>
              <div className="text-center">
                <span className="block text-gray-500 text-sm mb-1">Currently</span>
                <span className="text-white">New York, NY</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              <img 
                src="https://images.unsplash.com/photo-1542596768-5d1d21f1cfbd?q=80&w=1200&auto=format&fit=crop" 
                alt="Israel and Valentina" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;