import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Intro = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // The section now has decorative blurred shapes with parallax scroll
    <section id="about" className="relative overflow-hidden py-20 sm:py-28 mb-12 lg:mb-0">
      {/* Background Shapes with Parallax Effect */}
      <div aria-hidden="true" className="absolute inset-0 z-[-1]">
        <div
          className="absolute top-0 -left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-50 animate-blob"
          style={{ transform: `translateY(${offsetY * 0.2}px)` }} // Parallax
        />
        <div
          className="absolute bottom-0 -right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }} // Parallax
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wrapper for the Animated Gradient Border */}
        <div className="relative rounded-3xl p-px bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 animate-gradient-spin">
          
          {/* Main Blue Glass Container */}
          <div className="relative pt-24 lg:pt-8 rounded-[calc(1.5rem-1px)] bg-blue-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl">
            
            {/* Subtle noise pattern */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><rect fill="white" width="800" height="800"/><g fill-rule="evenodd"><circle fill="%23000" cx="400" cy="400" r="1"/><circle fill="%23000" cx="400" cy="400" r="1"/></g></svg>')`}} />
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8 p-8 pt-0 md:p-12 md:pt-0 lg:pt-12">
              
              {/* Left: Content */}
              <div className="relative z-10 text-left lg:order-1 order-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                  Strategy-first content. <br />
                  <span className="text-cyan-300">Creative that performs.</span>
                </h2>
                
                {/* Button with Glow Effect */}
                <div className="mt-8 relative inline-block">
                  <Button 
                    size="lg" 
                    className="relative z-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg border-2 border-blue-500 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {/* The Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-lg opacity-60 animate-pulse z-0" />
                </div>
              </div>

              {/* Right: Visuals Container (Image Only) */}
              <div className="relative lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 lg:order-2 order-1">
                <img
                  src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535ae064109d61f102506b_peep-79.svg"
                  alt="Harshith Tunuguntla, Founder of Stories at Scale"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[115%] w-auto max-w-none object-contain z-10"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
