import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  // Helper function to scroll to a specific section of the page smoothly.
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/20XWpB3P/Untitled-design-8.png')",
      }}
    >
      <div className="absolute top-6 right-12 z-50">
        {/* --- Updated Button: Thumb-sized with more padding --- */}
        <Button
  onClick={() => scrollToSection("contact")}
  className="bg-transparent border-2 border-blue-600 text-black font-semibold text-lg rounded-full 
             px-10 py-6 hover:bg-blue-600/10 backdrop-blur-sm transition-colors duration-300"
>
  Scale your story
  <ArrowUpRight className="ml-2 h-6 w-6" />
</Button>

      </div>

      {/* Content wrapper */}
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl text-center">
          {/* Main Heading */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-foreground"
            style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
          >
            <span className="text-blue-600">Stories</span> that{" "}
            <span className="text-blue-600">Scale</span>
          </h1>

          {/* Sub Heading */}
          <p
            className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90"
            style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}
          >
            From Invisible to In-Demand
          </p>

          {/* Description */}
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          We help Indian founders share their journey through short videos on Instagram & YouTube — without demanding their time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
