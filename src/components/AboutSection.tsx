import { Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import asherPhoto from "@/assets/asher-kotz-photo.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Asher Kotz</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-[300px,1fr] gap-12 items-start">
          <div>
            <img
              src={asherPhoto}
              alt="Asher Kotz - Founder of Kesher Global"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              I help international technology companies—particularly from Israel and India—successfully enter and grow in the United States market.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              My approach combines strategic planning with practical execution, leveraging 25 years of relationships and hard-won market intelligence.
            </p>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-foreground">Background</h3>
              <ul className="space-y-3">
                {[
                  "16+ years, Fairfax County, Northern Virginia business ecosystem",
                  "13 years, Silicon Valley technology business ecosystem",
                  "8+ years, Chair of Israeli American Council Washington",
                  "20+ years of growing business network in Israel and India",
                  "MBA, San Francisco State University",
                  "B.A., Tel Aviv University",
                  "Languages: English, Hebrew"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://www.linkedin.com/in/asherkotz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium mt-6"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
