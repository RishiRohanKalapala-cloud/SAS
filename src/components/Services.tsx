import React from 'react';

// --- Reusable ServiceCard Component (No changes here) ---
const ServiceCard = ({ title, description, number, variant = 'default' }) => {
  const isPrimary = variant === 'primary';

  const titleColor = isPrimary ? 'text-white' : 'text-foreground';
  const descriptionColor = isPrimary ? 'text-white/80' : 'text-muted-foreground';
  const numberColor = isPrimary ? 'text-white/10' : 'text-black/5';
  const numberPosition = 'right-4';

  return (
    <div
      className={`relative p-8 rounded-2xl border shadow-sm transition-colors duration-300 overflow-hidden
        ${isPrimary ? 'bg-primary border-blue-700' : 'bg-card border-border'}`
      }
    >
      <div className={`absolute top-0 text-9xl font-bold z-0 select-none pointer-events-none ${numberColor} ${numberPosition}`}>
        {String(number).padStart(2, '0')}
      </div>
      <div className="relative z-10 text-left">
        <h3 className={`text-2xl font-semibold tracking-tight ${titleColor}`}>
          {title}
        </h3>
        <p className={`mt-3 text-base ${descriptionColor}`}>
          {description}
        </p>
      </div>
    </div>
  );
};


// --- Main Services Section Component ---

const Services = () => {
  const servicesData = [
    {
      title: "Storytelling at Scale",
      description: "We shape clear, resonant narratives people remember — and act on. From launch messaging to ongoing series.",
    },
    {
      title: "Content Strategy",
      description: "Positioning, pillars, calendars, and distribution maps that keep you consistent and effective.",
    },
    {
      title: "Digital Campaigns",
      description: "Cross-channel concepts that break through the noise and deliver measurable impact.",
    },
    {
      title: "Creative Production",
      description: "Video, design, and copy with fast turnarounds and high polish.",
    },
    {
      title: "Performance Creative",
      description: "Test-and-learn assets optimized for CPC, CTR, and ROAS across paid channels.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              What We Do
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              End-to-end execution from strategy to production. Designed to move quickly and deliver outcomes.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            
            {/* Background Image Layer */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('https://i.postimg.cc/T1LsdkG5/Untitled-design-22.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* --- NEW: Overlay Layer for Blending Effect --- */}
            {/* This div sits on top of the image to darken it, making it "blend in". */}
        

            {/* Content Layer (Cards) - Sits on top of the image and overlay */}
            <div className="relative z-10 flex flex-col gap-8 p-8 md:p-12">
              {servicesData.map((service, index) => (
                <div
                  key={service.title}
                  className={`w-full flex ${index % 2 === 1 ? 'md:justify-end' : 'md-justify-start'}`}
                >
                  <div className="w-full md:w-1/2">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      number={index + 1}
                      variant={index % 2 === 1 ? "primary" : "default"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
