import { useEffect, useState, useRef } from "react";

const stats = [
  { number: 25, suffix: "+", label: "YEARS TECHNOLOGY EXPERIENCE" },
  { number: 50, suffix: "+", label: "ISRAELI COMPANIES ESTABLISHED" },
  { number: 40, suffix: "+", label: "INDIAN COMPANIES SUPPORTED" },
  { number: 580, suffix: "+", label: "CYBERSECURITY COMPANIES IN NETWORK" },
  { number: 16, suffix: "+", label: "YEARS FAIRFAX COUNTY / NORTHERN VIRGINIA ECOSYSTEM" },
  { number: 8, suffix: "+", label: "YEARS LEADING IAC DC" },
];

const industries = [
  "Cybersecurity",
  "Defense Technology",
  "AI & Machine Learning",
  "Healthcare Technology",
  "FinTech",
];

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 bg-primary-light text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Track Record of Success</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {stats.slice(0, 3).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {hasAnimated ? (
                  <CountUp end={stat.number} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-sm text-white tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {stats.slice(3, 6).map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {hasAnimated ? (
                  <CountUp end={stat.number} suffix={stat.suffix} />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-sm text-white tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-white">
            <strong>Industry Sectors We Specialize In</strong><br />
            {industries.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default Stats;
