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


// --- Main Services Section Component (With Refined Sizing and Spacing) ---

const Services = () => {
  const servicesData = [
    {
      title: "Content Research ",
      description: "We dive into your story, industry, and audience.",
    },
    {
      title: "Script Writing ",
      description: "Founder-first scripts that reflect your voice.",
    },
    {
      title: "Shooting (Optional)",
      description: " Record with us or self-shoot with our guidance.",
    },
    {
      title: "Editing ",
      description: "Engaging shorts designed to stop the scroll.",
    },
    {
      title: "Posting & Analysis",
      description: "Posting & Analysis → Consistency + performance insights for growth.",
    }
  ];

  return (
    // Section spacing: Consistent vertical padding for the entire section.
    <section id="services" className="py-20 sm:py-24 bg-gray-50">
      {/* Container: Centers content and sets max-width and horizontal padding. */}
      <div className="container mx-auto px-6 lg:px-8">
        {/* Content Wrapper: Constrains the section's content to a max-width for readability. */}
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              What We Do
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
            End-to-end storytelling for founders.
            From research to posting, we take care of the entire process so you can focus on building your business.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-white md:bg-transparent">
            
            <div
              className="absolute inset-0 z-0 hidden md:block"
              style={{
                backgroundImage: "url('https://i.postimg.cc/d0BHtXf8/Untitled-design-24.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
        
            {/* --- Cards Container: Manages padding and the gap between cards. --- */}
            {/* Responsive padding (p-6) is smaller on mobile, larger on desktop (md:p-12). */}
            {/* `gap-8` ensures consistent vertical spacing between all cards. */}
            <div className="relative z-10 flex flex-col gap-8 p-6 md:p-12">
              {servicesData.map((service, index) => (
                // --- Row Wrapper: This container is always full-width. ---
                // It uses flexbox to align its child (the card) to the start or end.
                <div
                  key={service.title}
                  className={`w-full flex ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}
                >
                  {/* --- Sized Card Container: THIS is what controls the card's width. --- */}
                  {/* `w-full` makes it full-width on mobile. */}
                  {/* `md:w-1/2` makes ALL cards exactly 50% width of the parent on desktop, ensuring perfect size consistency. */}
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
