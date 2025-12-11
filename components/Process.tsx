import React from 'react';
import { Lightbulb, ListChecks } from 'lucide-react';

const Process = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative blur */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="relative h-full min-h-[600px] hidden lg:block rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1200&auto=format&fit=crop" 
              alt="Design Process" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
               <h3 className="text-3xl font-medium mb-2">Art in Progress</h3>
               <p className="text-gray-400 text-sm">Behind the scenes of our creative workflow.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-xs uppercase tracking-wider font-medium">Design Process</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-medium mb-6">Our <br/><span className="text-gray-400">Process</span></h2>
                <p className="text-xl text-gray-400 max-w-lg mb-8">
                    Crafting bold visuals that inspire and elevate brands with thought process.
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-2 border border-white/20 rounded-lg text-sm hover:bg-white hover:text-black transition-colors">Book a Free Call</button>
                    <button className="px-6 py-2 border border-white/20 rounded-lg text-sm hover:bg-white hover:text-black transition-colors">See Projects</button>
                </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                    <span className="text-sm font-mono text-gray-500">01</span>
                </div>
                <h3 className="text-2xl font-medium mb-3">Define Your Vision</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Every project begins with a conversation. We listen to your goals, explore your style, and define the story you want to tell — whether it's through photography or a custom website.
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <ListChecks className="w-6 h-6 text-white" />
                    <span className="text-sm font-mono text-gray-500">02</span>
                </div>
                <h3 className="text-2xl font-medium mb-3">Create & Capture</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Here, the vision comes to life. From professional photo sessions to designing your digital presence, we plan, produce, and build with precision, creativity, and attention to every detail.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;