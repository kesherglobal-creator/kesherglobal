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
      <div className="container mx-auto px-16 lg:px-20 py-4 flex items-center justify-between">
        <a href="/" className="cursor-pointer flex items-center">
          <img src={logoWhite} alt="Kesher Global" className="h-32 lg:h-36" />
        </a>

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
                      <a
                        href="/services#market-entry"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Market Entry Strategy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Market research, go-to-market strategy, regulatory compliance
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services#site-selection"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Site Selection & Setup</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic location analysis, office location, resources
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services#business-dev"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Business Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Strategic partnerships and sales acceleration
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services#network"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Network & Introductions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Introduction to investors, business enable services, Industry's experts
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services#talent"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Talent Acquisition</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Assist with employees' recruitment, and team development
                        </p>
                      </a>
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
                      <a
                        href="/sectors#cybersecurity"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Cybersecurity</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Network security, cloud security, threat intelligence
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sectors#defense"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Defense Technology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced weapons systems, autonomous systems, C4ISR
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sectors#healthcare"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Healthcare IT</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          EHR, telemedicine, healthcare data analytics
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sectors#ai"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">AI & Machine Learning</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enterprise AI, computer vision, NLP
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sectors#fintech"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">FinTech</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Payment processing, digital banking, blockchain
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sectors#datacenters"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Data Centers & Cloud</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Infrastructure, cloud services, edge computing
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="/why-northern-virginia"
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            Why Northern Virginia
          </a>
          <button
            onClick={() => scrollToSection("engagement")}
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            How We Work
          </button>
          <a
            href="/about"
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            About Us
          </a>
          <button
            onClick={() => scrollToSection("insights")}
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            Insights
          </button>
          <a
            href="mailto:akotz@kesherglobal.com"
            className="text-white hover:text-primary-light transition-colors font-medium text-lg"
          >
            Contact
          </a>
          <Button
            asChild
            className="bg-primary hover:bg-primary-light text-white"
          >
            <a href="mailto:akotz@kesherglobal.com">Schedule Consultation</a>
          </Button>
        </div>

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
                    <a href="/services#market-entry" className="block text-sm text-muted-foreground hover:text-primary">Market Entry Strategy</a>
                    <a href="/services#site-selection" className="block text-sm text-muted-foreground hover:text-primary">Site Selection & Setup</a>
                    <a href="/services#business-dev" className="block text-sm text-muted-foreground hover:text-primary">Business Development</a>
                    <a href="/services#network" className="block text-sm text-muted-foreground hover:text-primary">Network & Introductions</a>
                    <a href="/services#talent" className="block text-sm text-muted-foreground hover:text-primary">Talent Acquisition</a>
                  </div>
                </div>
                
                <div>
                  <div className="text-lg font-bold mb-2">Sectors</div>
                  <div className="pl-4 space-y-2">
                    <a href="/sectors#cybersecurity" className="block text-sm text-muted-foreground hover:text-primary">Cybersecurity</a>
                    <a href="/sectors#defense" className="block text-sm text-muted-foreground hover:text-primary">Defense Technology</a>
                    <a href="/sectors#healthcare" className="block text-sm text-muted-foreground hover:text-primary">Healthcare IT</a>
                    <a href="/sectors#ai" className="block text-sm text-muted-foreground hover:text-primary">AI & Machine Learning</a>
                    <a href="/sectors#fintech" className="block text-sm text-muted-foreground hover:text-primary">FinTech</a>
                    <a href="/sectors#datacenters" className="block text-sm text-muted-foreground hover:text-primary">Data Centers & Cloud</a>
                  </div>
                </div>

                <a
                  href="/why-northern-virginia"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  Why Northern Virginia
                </a>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left"
                >
                  How We Work
                </button>
                <a
                  href="/about"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  About Us
                </a>
                <button
                  onClick={() => scrollToSection("insights")}
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left"
                >
                  Insights
                </button>
                <a
                  href="mailto:akotz@kesherglobal.com"
                  className="text-lg font-medium hover:text-primary-light transition-colors text-left block"
                >
                  Contact
                </a>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary-light text-white w-full mt-4"
                >
                  <a href="mailto:akotz@kesherglobal.com">Schedule Consultation</a>
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
