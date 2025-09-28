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
    <section id="contact" className="py-16 bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: CTA Content */}
          <div className="text-left">
            <div className="flex flex-col items-start">
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                The road to success starts from here
              </p>
              <TypewriterEffectSmooth 
                words={words} 
                className="text-5xl md:text-6xl" 
              />
            </div>
            {/* --- UPDATED: Increased top/bottom margin for more space below the headline --- */}
            <p className="text-lg md:text-xl text-muted-foreground my-12 max-w-2xl">
              Your journey deserves more than staying hidden. Let’s turn your experience into content that grows your reach, opens doors, and builds trust in your industry.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
             
            </div>
          </div>

          {/* Right Column: Get in Touch Form */}
          <div className="w-full max-w-md mx-auto lg:justify-self-end">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h3>
            <form className="space-y-8">
              <div>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Full Name" 
                  className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
              </div>
              <div>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
              </div>
              <div>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-base"
                  rows={3}
                />
              </div>
              <Button type="submit" className="w-full text-lg" size="lg">
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
