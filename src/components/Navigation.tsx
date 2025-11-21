import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoWhite from "@/assets/logo-kesher-global-white.png";
import { Link } from 'react-router-dom';

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation = ({ onContactClick }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary-dark shadow-md`}
    >
      <div className="container mx-auto px-16 lg:px-20 py-3 flex items-center justify-between">
        <Link to="/" className="cursor-pointer flex items-center">
          <img src={logoWhite} alt="Kesher Global" className="h-32 lg:h-36" />
        </Link>

        <div className="hidden lg:flex items-center gap-6 ml-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary-light data-[state=open]:text-primary-light text-lg font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    <li>
                      <Link
                        to="/services#market-entry"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Market Entry Strategy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Market research, go-to-market strategy, regulatory compliance
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services#site-selection"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Site Selection & Setup</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic location analysis, office location, resources
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services#business-dev"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Business Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic partnerships and sales acceleration
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services#network"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Network & Introductions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Introduction to investors, business enable services, Industry's experts
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services#talent"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Talent Acquisition</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Assist with employees' recruitment, and team development
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Sectors Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-primary-light data-[state=open]:text-primary-light text-lg font-medium">
                  Sectors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    <li>
                      <Link
                        to="/sectors#cybersecurity"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Cybersecurity</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Network security, cloud security, threat intelligence
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sectors#defense"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Defense Technology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced weapons systems, autonomous systems, C4ISR
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sectors#healthcare"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Healthcare IT</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          EHR, telemedicine, healthcare data analytics
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sectors#ai"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">AI & Machine Learning</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enterprise AI, computer vision, NLP
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sectors#fintech"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">FinTech</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Payment processing, digital banking, blockchain
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sectors#datacenters"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Data Centers & Cloud</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Infrastructure, cloud services, edge computing
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- DESKTOP MENU: Converted to Links --- */}
          <Link
            to="/why-northern-virginia"
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            Why Northern Virginia
          </Link>
          <Link
            to="/how-we-work" // FIXED: Converted from Button to Link
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            How We Work
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            About Us
          </Link>
          <Link
            to="/insights" // FIXED: Converted from Button to Link
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            Insights
          </Link>
          <Link
            to="mailto:akotz@kesherglobal.com"
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            Contact
          </Link>
          <Button
            asChild
            className="bg-primary hover:bg-primary-light text-white"
          >
            {/* FIXED: Closing tag was changed from </a> to </Link> */}
            <Link to="mailto:akotz@kesherglobal.com">Schedule Consultation</Link>
          </Button>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary-light">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <div>
                  <div className="text-lg font-bold mb-2">Services</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/services#market-entry" className="block text-sm text-muted-foreground hover:text-primary">Market Entry Strategy</Link>
                    <Link to="/services#site-selection" className="block text-sm text-muted-foreground hover:text-primary">Site Selection & Setup</Link>
                    <Link to="/services#business-dev" className="block text-sm text-muted-foreground hover:text-primary">Business Development</Link>
                    <Link to="/services#network" className="block text-sm text-muted-foreground hover:text-primary">Network & Introductions</Link>
                    <Link to="/services#talent" className="block text-sm text-muted-foreground hover:text-primary">Talent Acquisition</Link>
                  </div>
                </div>
                
                <div>
                  <div className="text-lg font-bold mb-2">Sectors</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/sectors#cybersecurity" className="block text-sm text-muted-foreground hover:text-primary">Cybersecurity</Link>
                    <Link to="/sectors#defense" className="block text-sm text-muted-foreground hover:text-primary">Defense Technology</Link>
                    <Link to="/sectors#healthcare" className="block text-sm text-muted-foreground hover:text-primary">Healthcare IT</Link>
                    <Link to="/sectors#ai" className="block text-sm text-muted-foreground hover:text-primary">AI & Machine Learning</Link>
                    <Link to="/sectors#fintech" className="block text-sm text-muted-foreground hover:text-primary">FinTech</Link>
                    <Link to="/sectors#datacenters" className="block text-sm text-muted-foreground hover:text-primary">Data Centers & Cloud</Link>
                  </div>
                </div>

                <Link
                  to="/why-northern-virginia"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  Why Northern Virginia
                </Link>
                {/* MOBILE FIXED: Converted from Button to Link */}
                <Link
                  to="/how-we-work"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  How We Work
                </Link>
                <Link
                  to="/about"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  About Us
                </Link>
                {/* MOBILE FIXED: Converted from Button to Link */}
                <Link
                  to="/insights"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  Insights
                </Link>
                <Link
                  to="mailto:akotz@kesherglobal.com"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  Contact
                </Link>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary-light text-white w-full mt-4"
                >
                  {/* FIXED: Closing tag was changed from </a> to </Link> */}
                  <Link to="mailto:akotz@kesherglobal.com">Schedule Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
