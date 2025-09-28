import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-[#f5f3ef] pt-24 pb-12 overflow-hidden font-sans">
      {/* Slanted blue background shape */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-blue-600"
        style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>

      {/* Main Content Card */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Placeholder Comment --- */}
        {/* Add your character illustrations with absolute positioning here */}
        {/* Example: <img src="/character1.svg" className="absolute top-[-5rem] left-1/4 w-32 z-10" /> */}
        
        <div className="relative bg-white rounded-3xl border-[4px] border-blue-600 p-8 md:p-12">
          {/* Top Section: Links and CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Link Columns - now spans wider to fill the space */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-black">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">nbout Us</a></li>
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">How it works</a></li>
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Help</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-black">Social Media</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Discord</a></li>
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">LinkedIn</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-black">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:hello@storiesatscale.in" className="text-sm text-gray-700 hover:text-black transition-colors break-all">
                      hello@storiesatscale.in
                    </a>
                  </li>
                  <li>
                    <a href="tel:+917425882688" className="text-sm text-gray-700 hover:text-black transition-colors">
                      +91 7425882688
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <Button variant="outline" className="bg-white border-2 border-black rounded-lg px-6 py-2 text-base font-semibold hover:bg-gray-100 transition-colors">
                Contact us
              </Button>
            </div>
          </div>
          
          {/* Bottom Section: Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-gray-800">© 2024 Stories at Scale</p>
              <p className="text-xs text-gray-500">Creative Storytelling Agency</p>
            </div>
            <a href="#" className="text-sm font-semibold text-gray-800 hover:text-black transition-colors">Help & Support</a>
          </div>

          {/* --- Placeholder Comment --- */}
          {/* Add another character peeking from the bottom right */}
          {/* Example: <img src="/character2.svg" className="absolute bottom-[-2rem] right-[-1rem] w-24" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
