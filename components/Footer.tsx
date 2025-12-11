import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <span className="text-sm text-gray-500">© 2024 Focus Media. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
           {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
               <a key={social} href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{social}</a>
           ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;