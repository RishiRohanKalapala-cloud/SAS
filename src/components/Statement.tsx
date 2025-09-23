import React from 'react';

const InspirationalQuoteSection = () => {
  const quotes = [
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
    },
    {
      quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    }
  ];

  const middleIndex = Math.floor(quotes.length / 2);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header section updated for left alignment */}
          <div className="max-w-4xl mb-16">
            <p className="text-blue-600 text-base font-semibold mb-3">Words of Wisdom</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Inspiration for Your Journey
            </h2>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl">
              A collection of quotes to motivate and inspire you to achieve greatness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {quotes.map((quote, index) => {
              const isMiddleCard = index === middleIndex;
              return (
                <div
                  key={index}
                  className={`
                    col-span-1 rounded-2xl border relative overflow-hidden
                    transition-all duration-300 ease-in-out flex flex-col
                    hover:shadow-2xl hover:-translate-y-2 group
                    ${isMiddleCard ? 'bg-primary border-transparent text-primary-foreground' : 'bg-card border-border'}
                  `}
                >
                  <div className="p-8 flex-grow flex flex-col justify-between text-center">
                    {/* Top Section with Quote Icon */}
                    <div className="flex justify-center items-start mb-8">
                      <svg className={`w-12 h-12 transition-colors duration-300 ease-in-out ${isMiddleCard ? 'text-primary-foreground/80' : 'text-foreground/90'}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.983 3v7.391c0 2.848-1.545 5.15-3.441 5.15-1.897 0-3.441-2.302-3.441-5.15s1.544-5.15 3.441-5.15c.386 0 .76.061 1.121.179l.52-1.89c-.586-.16-1.217-.249-1.88-.249-3.006 0-5.441 3.14-5.441 7.019 0 3.879 2.435 7.019 5.441 7.019 3.005 0 5.441-3.14 5.441-7.019v-9.391h-2.161zm11.017 0v7.391c0 2.848-1.545 5.15-3.441 5.15-1.897 0-3.441-2.302-3.441-5.15s1.544-5.15 3.441-5.15c.386 0 .76.061 1.121.179l.52-1.89c-.586-.16-1.217-.249-1.88-.249-3.006 0-5.441 3.14-5.441 7.019 0 3.879 2.435 7.019 5.441 7.019 3.005 0 5.441-3.14 5.441-7.019v-9.391h-2.161z"/>
                      </svg>
                    </div>

                    {/* Bottom Section with Content */}
                    <div>
                      <p className={`text-center text-balance text-xl font-medium tracking-tight mb-4 ${isMiddleCard ? 'text-primary-foreground' : 'text-foreground'}`}>
                        "{quote.quote}"
                      </p>
                      <h3 className={`text-center text-base font-semibold ${isMiddleCard ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        - {quote.author}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationalQuoteSection;