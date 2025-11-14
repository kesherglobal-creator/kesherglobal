import { CheckCircle2, Target, Network, HandshakeIcon, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import asherPhoto from "@/assets/asher-kotz-photo.jpg";

const AboutUs = () => {
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();
  const section5 = useScrollAnimation();

  const approaches = [
    {
      icon: HandshakeIcon,
      title: "Strategic Partnership",
      description: "We work alongside you as a dedicated partner, not just a consultant"
    },
    {
      icon: Network,
      title: "Network Activation",
      description: "Leverage our 25+ years of connections across government, industry, and investors"
    },
    {
      icon: Target,
      title: "Hands-On Support",
      description: "From strategy to execution, we provide practical, actionable guidance"
    },
    {
      icon: Lightbulb,
      title: "Sector Expertise",
      description: "Deep knowledge in cybersecurity, defense tech, healthcare IT, and more"
    }
  ];

  const whyChooseUs = [
    "Unparalleled Network",
    "Proven Track Record",
    "Strategic Intelligence",
    "Cultural Bridge",
    "Comprehensive Support"
  ];

  const highlights = [
    "25+ years technology & business development experience",
    "Former Assistant Director at Fairfax County EDA",
    "50+ Israeli companies successfully established",
    "580+ cybersecurity companies in network",
    "MBA from San Francisco State University",
    "B.A. from Tel Aviv University",
    "13 years in Silicon Valley",
    "Trilingual: English, Hebrew, Spanish"
  ];

  return (
    <div className="min-h-screen pt-32">
      <Navigation onContactClick={() => {}} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Your Trusted Partner for US Market Expansion
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Leveraging 25+ years of proven expertise connecting international companies to the US market
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section
        ref={section1.ref}
        className={`py-20 bg-background transition-all duration-700 ${
          section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Kesher Global is a boutique consulting firm specializing in helping international technology companies—particularly from Israel and India—successfully enter and expand in the United States market. With a strategic focus on the Washington DC metropolitan area, we provide comprehensive market entry services that transform ambitious expansion plans into tangible success stories.
              </p>
              <p>
                Founded on 25+ years of hands-on experience in technology commercialization and business development, Kesher Global serves as your strategic bridge to the US market. We understand the unique challenges international companies face when entering a new market, and we've built our practice around eliminating those barriers.
              </p>
              <p>
                Our approach combines deep local market intelligence, an extensive network of decision-makers, and proven methodologies that have helped dozens of companies establish thriving US operations. Whether you're seeking your first US customer, navigating federal procurement processes, or building your American team, Kesher Global provides the expertise and connections to accelerate your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Asher Kotz */}
      <section
        ref={section2.ref}
        className={`py-20 bg-secondary/30 transition-all duration-700 ${
          section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Meet Asher Kotz
            </h2>
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2">
                <img 
                  src={asherPhoto} 
                  alt="Asher Kotz, Founder & President"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground">Asher Kotz</h3>
                  <p className="text-lg text-primary font-semibold">Founder & President</p>
                </div>
              </div>
              <div className="md:col-span-3">
                <Card className="border-2 border-border">
                  <CardContent className="p-8">
                    <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                      Asher Kotz brings over 25 years of technology commercialization and business development expertise to Kesher Global. As the former Assistant Director at the Fairfax County Economic Development Authority, Asher played a pivotal role in attracting and supporting technology companies in Northern Virginia, establishing himself as a trusted advisor for international firms seeking US market entry.
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground mb-4">Key Highlights</h4>
                      <ul className="space-y-3">
                        {highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        ref={section3.ref}
        className={`py-20 bg-background transition-all duration-700 ${
          section3.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approaches.map((approach, index) => {
                const Icon = approach.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 hover:shadow-emerald">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{approach.title}</h3>
                      <p className="text-foreground/70">{approach.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={section4.ref}
        className={`py-20 bg-secondary/30 transition-all duration-700 ${
          section4.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="text-lg font-semibold text-foreground">{item}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section
        ref={section5.ref}
        className={`py-20 bg-background transition-all duration-700 ${
          section5.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-primary-light/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  To empower innovative international technology companies by providing strategic guidance, 
                  local market expertise, and access to key decision-makers, enabling them to successfully 
                  establish and grow their presence in the United States market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <div className="space-y-4 text-lg mb-8">
            <p>📧 <a href="mailto:akotz@kesherglobal.com" className="hover:text-primary-light transition-colors">akotz@kesherglobal.com</a></p>
            <p>📞 <a href="tel:+1(703) 862-9222" className="hover:text-primary-light transition-colors">+1(703) 862-9222</a></p>
            <p>📍 Fairfax County, Virginia</p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg bg-primary hover:bg-primary-light text-white transition-all"
          >
            <a href="mailto:akotz@kesherglobal.com">Schedule a Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
