import React from 'react';

// --- Reusable ServiceRow Component ---

const ServiceRow = ({ imageUrl, title, description, number, reverse = false, variant = 'default' }) => {
  const isPrimary = variant === 'primary';

  const titleColor = isPrimary ? 'text-white' : 'text-foreground';
  const descriptionColor = isPrimary ? 'text-white/80' : 'text-muted-foreground';
  const numberColor = isPrimary ? 'text-white/10' : 'text-black/5';
  const numberPosition = 'right-4';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
      
      {/* Content Card */}
      <div
        className={`relative p-8 rounded-2xl border shadow-sm transition-colors duration-300 overflow-hidden
          ${isPrimary ? 'bg-primary border-blue-700' : 'bg-card border-border'}
          ${reverse ? 'md:order-2' : 'md:order-1'}`
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

      {/* Blended Image Container */}
      <div className={`relative z-10 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        {/* UPDATED: Image height has been further reduced from h-64 to h-56 */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover rounded-2xl"
        />
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
      imageUrl: "https://i.postimg.cc/d132m2cF/Untitled-design-15.png"
    },
    {
      title: "Content Strategy",
      description: "Positioning, pillars, calendars, and distribution maps that keep you consistent and effective.",
      imageUrl: "https://i.postimg.cc/FzDQ5XC2/Untitled-design-14.png"
    },
    {
      title: "Digital Campaigns",
      description: "Cross-channel concepts that break through the noise and deliver measurable impact.",
      imageUrl: "https://i.postimg.cc/d132m2cF/Untitled-design-15.png"
    },
    {
      title: "Creative Production",
      description: "Video, design, and copy with fast turnarounds and high polish.",
      imageUrl: "https://i.postimg.cc/FzDQ5XC2/Untitled-design-14.png"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 text-left">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We Do
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              End-to-end execution from strategy to production. Designed to move quickly and deliver outcomes.
            </p>
          </div>

          {/* Layout Container */}
          <div className="flex flex-col gap-8">
            {servicesData.map((service, index) => (
              <ServiceRow
                key={service.title}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                number={index + 1}
                reverse={index % 2 === 1}
                variant={index % 2 === 1 ? "primary" : "default"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
