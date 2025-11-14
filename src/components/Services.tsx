import { Building2, Handshake, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Building2,
    title: "Market Entry Strategy",
    description:
      "Navigate regulatory requirements, identify optimal locations, and develop go-to-market strategies tailored to US business culture",
  },
  {
    icon: Handshake,
    title: "Network & Partnerships",
    description:
      "Leverage 25+ years of relationships with investors, corporate partners, government agencies, and industry leaders",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Accelerate sales through introductions to potential customers, partners, and ecosystem players in your target industries",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="services" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Support Your Growth</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive market entry and expansion services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald border-2 border-transparent hover:border-primary-light"
            >
              <CardHeader>
                <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
