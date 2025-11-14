import { MapPin, Building2, Cpu, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-city-network.webp";

const WhyNorthernVirginia = () => {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();
  const section5 = useScrollAnimation();
  const section6 = useScrollAnimation();

  const stats = [
    {
      icon: MapPin,
      title: "Strategic Location",
      items: [
      "Virginia is #1 State for Business ranking",
      "3 major international airports",
      "Direct flights to Tel Aviv, Mumbai, Delhi",
      "Part of world's 3rd largest economy of US East Coast"
      ]
    },
    {
      icon: Building2,
      title: "Federal Government Proximity",
      items: [
        "$55 billion+ in annual government contracts",
        "Home to Pentagon, CIA, NSA, 100+ federal agencies",
        "$12 billion+ in federal cybersecurity spending",
        "Largest concentration of cleared personnel"
      ]
    },
    {
      icon: Cpu,
      title: "Technology Ecosystem",
      items: [
        "21,000+ technology establishments",
        "580+ cybersecurity companies",
        "70% of global internet traffic",
        "Amazon HQ2, Microsoft, Google, Capital One"
      ]
    },
    {
      icon: GraduationCap,
      title: "Talent Pool",
      items: [
        "60+ colleges and universities",
        "13,000+ CS graduates annually",
        "400,000+ students in higher education",
        "123,000+ cybersecurity workforce"
      ]
    }
  ];

  const fortune500 = [
    "Beacon",
    "Booz Allen Hamilton",
    "Capital One",
    "Freddie Mac",
    "General Dynamics",
    "Hilton",
    "Leidos",
    "Northrop Grumman",
    "NVR",
    "SAIC"
  ];

  const businessEnvironment = [
    "#1 State for Business ranking",
    "Competitive tax structure",
    "Strong IP protections",
    "Economic incentive programs"
  ];

  return (
    <div className="min-h-screen pt-24">
      <Navigation onContactClick={() => {}} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80 z-10" />
        <img 
          src={heroImage} 
          alt="Northern Virginia skyline" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            The Epicenter of American Technology & Innovation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Northern Virginia offers unparalleled advantages for companies entering the US market
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const ref = [section1, section2, section3, section4][index];
              return (
                <div
                  key={index}
                  ref={ref.ref}
                  className={`transition-all duration-700 ${
                    ref.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <Card className="h-full border-2 border-border hover:border-primary transition-colors duration-300 hover:shadow-emerald">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mt-2">{stat.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {stat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fortune 500 Companies */}
      <section
        ref={section5.ref}
        className={`py-20 bg-secondary/30 transition-all duration-700 ${
          section5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Fortune 500 Headquarters
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Join the ranks of industry leaders who chose Northern Virginia
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {fortune500.map((company, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="font-semibold text-foreground">{company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Environment */}
      <section
        ref={section6.ref}
        className={`py-20 bg-background transition-all duration-700 ${
          section6.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Business Environment
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                A proven ecosystem for business success
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {businessEnvironment.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-dark text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore the US Market?
          </h2>
          <p className="text-lg mb-8 opacity-95 leading-relaxed">
            Schedule a complimentary 30-minute consultation to discuss your objectives and how Kesher Global can support your success.
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg bg-primary hover:bg-primary-light text-white transition-all"
          >
            <a href="mailto:akotz@kesherglobal.com">Schedule Your Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyNorthernVirginia;
