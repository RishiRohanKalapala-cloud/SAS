import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const GiantTextBackground = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="whitespace-nowrap capitalize font-extrabold text-[60px] md:text-[120px] xl:text-[220px] tracking-tighter text-black/5 leading-none -mb-4 md:-mb-8 xl:-mb-20">
        stories at scale
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-white py-20 px-8 overflow-hidden">
      <GiantTextBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Row: Logo, Nav Links, Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          <div className="text-2xl font-bold text-black">
            Stories at Scale
          </div>
          
          <nav className="flex items-center flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#Home" className="text-black hover:text-gray-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-black hover:text-gray-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-black hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="text-black hover:text-gray-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-black hover:text-gray-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-black hover:text-gray-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-black hover:text-gray-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Youtube" className="text-black hover:text-gray-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* --- UPDATED: Bottom Row now includes contact info --- */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            {/* Left Side: Copyright and Contact Details */}
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2024 Stories at Scale. All rights reserved.
              </p>
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-gray-500">
                <a href="mailto:hello@storiesatscale.in" className="hover:text-black transition-colors">hello@storiesatscale.in</a>
                <span className="hidden sm:inline">|</span>
                <a href="tel:+91 7425882688" className="hover:text-black transition-colors">+91 7425882688</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="hover:text-black transition-colors">@storiesatscale</a>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
