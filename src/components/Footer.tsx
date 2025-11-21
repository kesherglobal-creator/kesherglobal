import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold tracking-tight">KESHER GLOBAL</div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
            <span>1640 Boro Place, 4th Flr</span>
            <span>McLean, Virginia 22102, United States</span>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:akotz@kesherglobal.com" className="hover:text-primary-light transition-colors">
              akotz@kesherglobal.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://wa.me/17038629222" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
              +1 (703) 862-9222
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/asherkotz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-light hover:scale-110 transition-all duration-200"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <div className="border-t border-white/20 pt-6 text-sm opacity-80">
            © 2025 Kesher Global LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
