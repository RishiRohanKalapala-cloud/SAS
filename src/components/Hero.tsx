import { Button } from "@/components/ui/button";
// --- UPDATED: Changed the imported icon to the slanting arrow ---
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  // Helper function to scroll to a specific section of the page smoothly.
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/20XWpB3P/Untitled-design-8.png')",
      }}
    >
      <div className="absolute top-6 right-6 z-50">
        <Button onClick={() => scrollToSection("contact")}>
          Scale your story
          {/* --- UPDATED: Replaced ArrowRight with ArrowUpRight for the slanting effect --- */}
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Content wrapper */}
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl text-center">
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground"
            style={{ textShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
          >
            <span className="text-blue-600">Stories</span> that <span className="text-blue-600">Scale</span>
          </h1>

          {/* Sub Heading */}
          <p
            className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90"
            style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }}
          >
            Creative & Content That Converts.
          </p>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We blend strategic storytelling with creative excellence to build narratives that not only resonate but also drive meaningful growth for your brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
