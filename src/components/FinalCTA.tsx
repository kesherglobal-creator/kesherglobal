import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onContactClick: () => void;
}

const FinalCTA = ({ onContactClick }: FinalCTAProps) => {
  return (
    <section id="contact" className="py-24 bg-primary-dark text-white text-center">
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
  );
};

export default FinalCTA;
