import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: 1,
    title: "Discovery Call",
    description: "30-minute consultation to understand your objectives",
  },
  {
    number: 2,
    title: "Strategic Plan",
    description: "Customized market entry strategy with clear milestones",
  },
  {
    number: 3,
    title: "Execution",
    description: "Network activation and hands-on support throughout setup",
  },
  {
    number: 4,
    title: "Ongoing Partnership",
    description: "Available as trusted advisor as you grow and scale",
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="process" className="py-24 bg-white">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work Together</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line - hidden on mobile */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ width: "calc(100% - 8rem)", left: "4rem" }}></div>

            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 rounded-full bg-primary group-hover:bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
