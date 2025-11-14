import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Working with Asher for a few years with my company and with other companies in my investment portfolio. He is very knowledgeable, has lots of connections and helps companies with their US strategy and execute, good salesmen and helps portfolio companies with fundraising recruiting.",
    name: "Ofer Elran",
    title: "Managing Partner at MoreWe Investing"
  },
  {
    quote: "I have worked with Asher for more than 15 years to support our growth in the U.S. Market. He has unique skills of business development and strategic planning to effectively engage with partners and customers to enable our sales ramp up activity. We wish Asher a good and solid success journey and we are keen to enhance our U.S. business activities with his kind support.",
    name: "Danny Moshe",
    title: "CEO at GreenVision Systems"
  },
  {
    quote: "Asher is a dedicated business development professional. I enjoyed his focus and attention to detail related to driving introductions and connection for our firm and external organizations. Asher was always quick to respond to any request and had a great sense of urgency.",
    name: "Christy R.",
    title: "VP Development Services"
  },
  {
    quote: "I've had the pleasure of working with Asher Kotz for over 15 years, through my work at ProductSavvy. Asher has an exceptional ability to connect Israeli companies with the Fairfax County business ecosystem, offering the right introductions, insights, and resources to accelerate their success. Asher has also excelled in organizing impactful events where I've presented, always with a clear focus on showcasing real business opportunities and practical go-to-market strategies for international ventures entering the U.S. market. Asher's professionalism, insight, and long-term commitment to innovation make him an invaluable partner in the ecosystem. I highly recommend him.",
    name: "Jonathan Chashper",
    title: "CEO at Product Savvy Consulting"
  },
  {
    quote: "Asher is smart-strong in all things related to business dev. He is solid on operation and process implementation as well as execution. Demonstrated flexibility to juggle multiple priority requirements and got it all right. Very sharp.",
    name: "Frank Yan",
    title: "CEO of Blaicnet Cyber and Serial Entrepreneur"
  },
  {
    quote: "Asher always delivered a very high level of service to the businesses of Fairfax County. He regularly worked with tech companies from all over the world including Israel, UK, Canada, and India. His business acumen is strong and together, I would definitely have Asher on my team.",
    name: "Daniel Plaksin",
    title: "CPA Sr. Tax and Business Management Executive"
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="testimonials"
      className={`py-20 bg-[#D9DBD7] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Clients and Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full transition-all duration-300 hover:shadow-emerald hover:border-l-4 hover:border-primary-light"
            >
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
