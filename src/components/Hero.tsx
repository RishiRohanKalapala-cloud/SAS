import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/20XWpB3P/Untitled-design-8.png')",
      }}
    >
      {/* Floating rounded navbar with dynamic width */}
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "w-[90vw] max-w-6xl" : "w-[95vw] max-w-7xl"
        }`}
      >
        <div className="flex items-center justify-between rounded-full border border-blue-600/20 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 shadow-lg">
          {/* Left: Site name */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="font-semibold text-sm md:text-lg tracking-tight whitespace-nowrap">Stories at Scale</span>
          </div>

          {/* Right: Desktop nav + CTA */}
          <div className="hidden md:flex items-center gap-1 md:gap-2">
            <button onClick={() => scrollToSection("home")} className="px-3 md:px-4 py-1.5 text-sm md:text-base rounded-full hover:bg-blue-600/10 text-foreground/90">Home</button>
            <button onClick={() => scrollToSection("services")} className="px-3 md:px-4 py-1.5 text-sm md:text-base rounded-full hover:bg-blue-600/10 text-foreground/90">Services</button>
            <button onClick={() => scrollToSection("about")} className="px-3 md:px-4 py-1.5 text-sm md:text-base rounded-full hover:bg-blue-600/10 text-foreground/90">About</button>
            <button onClick={() => scrollToSection("contact")} className="px-3 md:px-4 py-1.5 text-sm md:text-base rounded-full hover:bg-blue-600/10 text-foreground/90">Contact</button>
            <Button size="sm" className="ml-1 rounded-full" onClick={() => scrollToSection("contact")}>Get Started</Button>
          </div>

          {/* Right: Mobile hamburger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="inline-flex items-center justify-center rounded-full p-2 hover:bg-blue-600/10">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="mt-8 flex flex-col gap-2">
                  <SheetClose asChild>
                    <button onClick={() => scrollToSection("home")} className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent">Home</button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button onClick={() => scrollToSection("services")} className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent">Services</button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button onClick={() => scrollToSection("about")} className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent">About</button>
                  </SheetClose>
                  <SheetClose asChild>
                    <button onClick={() => scrollToSection("contact")} className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent">Contact</button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="mt-2" onClick={() => scrollToSection("contact")}>Get Started</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
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

          {/* Button container */}
          <div className="mt-10 flex items-center justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Scale Your Story
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
