import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const FinalCTA = () => {
  const words = [
    {
      text: "Ready",
    },
    {
      text: "to",
    },
    {
      text: "scale",
    },
    {
      text: "your",
    },
    {
      text: "story?",
      className: "text-primary dark:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CTA Content */}
          <div className="text-left">
            <div className="flex flex-col items-start">
              <p className="text-muted-foreground text-base mb-4">
                The road to success starts from here
              </p>
              <TypewriterEffectSmooth words={words} />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Let's create something extraordinary together. Your story deserves to be heard.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Start Your Project
              </Button>
              
            </div>
          </div>

          {/* Right Column: Get in Touch Form */}
          {/* UPDATED: `lg:justify-self-end` is added to push the form to the far right of its column */}
          <div className="w-full max-w-md mx-auto lg:justify-self-end">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <form className="space-y-8">
              <div>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Full Name" 
                  className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
