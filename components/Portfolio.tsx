import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const projects = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    title: 'Urban Portraits',
    category: 'Photography'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    title: 'Studio Sessions',
    category: 'Portrait'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    title: 'Men\'s Fashion',
    category: 'Commercial'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=800&auto=format&fit=crop',
    title: 'Product Design',
    category: 'Design'
  }
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-medium">Recent Works</h2>
          <ArrowDownCircle className="w-6 h-6 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#111] cursor-pointer">
              <img 
                src={project.src} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">{project.category}</span>
                <h3 className="text-lg font-medium text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;