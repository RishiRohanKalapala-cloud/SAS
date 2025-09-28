"use client";

import React from "react";

export const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-black py-20 min-h-[300px]">
      <div className="px-5">
        <div className="text-4xl md:text-5xl font-fk-display leading-tight max-w-5xl">
          Clients can't say enough about Stories at Scale.
        </div>
      </div>
      
      {/* Centered Quotation Mark */}
      <div className="mt-12 text-6xl md:text-8xl font-serif text-gray-300">
        “
      </div>
    </div>
  );
};

export default Testimonials;
