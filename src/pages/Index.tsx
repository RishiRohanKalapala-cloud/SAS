import Hero from "@/components/Hero";

import Services from "@/components/Services";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <Intro />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <FinalCTA />
      <section id="contact">
        <Contact />
      </section>
      <ChatBot />

      {/* Rounded-edge footer */}
      <Footer />
    </div>
  );
};

export default Index;
