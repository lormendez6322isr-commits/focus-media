import React from 'react';
import { Command } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

const QuoteButton = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* The Button Container */}
        <div className="bg-gradient-to-b from-white to-gray-200 text-black pl-5 pr-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-3 cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform duration-200 relative overflow-hidden border border-white">
          
          <Command size={18} className="text-black" />
          <span className="font-semibold tracking-tight text-sm md:text-base">Get a Quote Now</span>
          
          {/* ElevenLabs Agent Embed */}
          {/* We position the agent absolutely over the button to ensure it captures interactions or displays its own UI if configured to do so. 
              The container ensures it stays within the design flow. */}
          <div className="absolute inset-0 opacity-0 w-full h-full overflow-hidden" style={{ zIndex: 10 }}>
            {/* The custom element as requested */}
            <elevenlabs-convai agent-id="agent_1501kc5jkmjvf69br88x67g632ef"></elevenlabs-convai>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteButton;