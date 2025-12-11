import React from 'react';
import { Crop, Monitor, Camera, PenTool, Layout, Heart } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Portraits & Lifestyle",
    description: "Timeless, expressive portraits for individuals, couples, creators, and professionals who want to capture their story with elegance and authenticity."
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom, high-impact websites built to convert, tell your story, and represent your brand with seamless user experience and modern style."
  },
  {
    icon: Heart,
    title: "Weddings & Events",
    description: "Emotional storytelling through photography that preserves life's most meaningful moments with detail, beauty, and heart."
  },
  {
    icon: Layout,
    title: "Optimization",
    description: "Migration, updates, and improvements to existing brands and websites to ensure cohesive visuals, smooth performance, and consistent identity everywhere."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <span className="text-xs uppercase tracking-wider font-medium">Media Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-medium text-white mb-6">Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Helping businesses and individuals stand out through powerful photography and digital experiences designed to connect, inspire, and grow.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            {['Portraits', 'Weddings', 'Brand Photography', 'Website Design', 'Creative Shoots'].map((tag) => (
              <button key={tag} className="px-5 py-2.5 bg-[#111] border border-white/5 rounded-lg text-gray-300 hover:bg-[#222] hover:border-white/20 transition-all text-sm">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group p-8 md:p-12 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 hover:bg-[#0F0F0F] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                <service.icon strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;