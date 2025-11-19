import { useState } from "react";
import { Shield, MessageCircle, Network, Compass, Layers, Rocket, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Approach = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const heroRef = useScrollAnimation();
  const challengeRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const differentiatorRef = useScrollAnimation();
  const testimonialRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactModalOpen(true)} />

      {/* 1. HERO SECTION (Layout Simétrico - Texto Escuro) */}
      <section
        ref={heroRef}
        className="hero-section flex flex-col justify-between"
        style={{
          minHeight: '100vh',
          paddingTop: '10rem',
          paddingBottom: '60px',
          paddingLeft: '5%',
          paddingRight: '5%',
          textAlign: 'center',
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F939ca2122b274a91b52c2410a5b067ce?format=webp&width=800')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Bloco H1 (No topo) */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          From Complexity to Clarity
        </h1>
        
        {/* Bloco H2 e Botão (Embaixo) */}
        <div className="hero-bottom-content max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Our proven methodology guides Israeli and Indian tech leaders through the complexities of U.S. market entry.
          </p>
          <Button 
            onClick={() => setContactModalOpen(true)} 
            size="lg"
            className="btn-green-kesher bg-primary-dark hover:bg-primary-medium"
          >
            Schedule Your GTM Strategy Call
          </Button>
        </div>
      </section>

      {/* 2. SEÇÃO O DESAFIO (EM INGLÊS) */}
      <section ref={challengeRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Entering the U.S. Market is More Than a Long Flight
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Brilliant tech companies often fail in the U.S. not because of their product, but because of a gap in market strategy. Regulatory hurdles, cultural nuances, and fierce competition can stop growth before it starts. <span className="font-bold">You don't have to navigate it alone.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Ícone 1 (Escudo) */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-light/20 rounded-full p-4 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-primary-dark" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary-dark mt-4">Regulatory Hurdles</h4>
            </div>
            {/* Ícone 2 (Balão de Fala) */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-light/20 rounded-full p-4 flex items-center justify-center">
                  <MessageCircle className="w-12 h-12 text-primary-dark" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary-dark mt-4">Cultural Nuances</h4>
            </div>
            {/* Ícone 3 (Rede) */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-light/20 rounded-full p-4 flex items-center justify-center">
                  <Network className="w-12 h-12 text-primary-dark" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-primary-dark mt-4">Network Access</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO METODOLOGIA (EM INGLÊS) */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            The Kesher Gateway Framework™
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A proven 4-phase process designed to take you from initial planning to sustainable U.S. scale.
          </p>

          <div className="space-y-12 max-w-3xl mx-auto">
            {/* FASE 1: Bússola */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-primary-light/20 rounded-full">
                <Compass className="w-10 h-10 text-primary-dark" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Phase 1: Discovery & Market-Fit
                </h3>
                <p className="text-gray-700 mb-4">We don't just translate your pitch; we validate it. We analyze your product against the U.S. competitive landscape (especially in DC and California) and identify your ideal beachhead market.</p>
                <p className="text-gray-900 font-semibold">
                  <span className="font-bold">Deliverables:</span> Competitive Analysis Report, U.S. Ideal Customer Profile (ICP), Go/No-Go Viability Assessment.
                </p>
              </div>
            </div>

            {/* FASE 2: Documento */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-primary-light/20 rounded-full">
                <Layers className="w-10 h-10 text-primary-dark" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Phase 2: Strategy & GTM Blueprint
                </h3>
                <p className="text-gray-700 mb-4">We build your U.S. playbook. This includes pricing strategy, localized product roadmaps, channel strategy (partnerships, direct sales), and the regulatory engagement plan crucial for D.C. (GovTech/Defense).</p>
                <p className="text-gray-900 font-semibold">
                  <span className="font-bold">Deliverables:</span> Go-to-Market Strategy Deck, U.S. Pricing Model, Key Stakeholder Map.
                </p>
              </div>
            </div>

            {/* FASE 3: Foguete */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-primary-light/20 rounded-full">
                <Rocket className="w-10 h-10 text-primary-dark" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Phase 3: Execution & In-Market Launch
                </h3>
                <p className="text-gray-700 mb-4">We are your "boots on the ground." Kesher acts as your launch team, facilitating key introductions, securing first meetings, sourcing local talent, and managing your initial PR and sales outreach.</p>
                <p className="text-gray-900 font-semibold">
                  <span className="font-bold">Deliverables:</span> First customer meetings secured, initial sales pipeline, U.S. entity established.
                </p>
              </div>
            </div>

            {/* FASE 4: Gráfico */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 bg-primary-light/20 rounded-full">
                <TrendingUp className="w-10 h-10 text-primary-dark" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Phase 4: Scale & Optimization
                </h3>
                <p className="text-gray-700 mb-4">Launch is just the beginning. We help you analyze initial KPIs, optimize your sales and marketing funnels, and build the infrastructure for sustainable, long-term growth in the American market.</p>
                <p className="text-gray-900 font-semibold">
                  <span className="font-bold">Deliverables:</span> Dashboard of KPIs, Quarterly Optimization Plan, Long-Term Expansion Strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DIFERENCIAL (EM INGLÊS) */}
      <section ref={differentiatorRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Your Asymmetric Advantage in the U.S. Market
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="border border-gray-300 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-primary-dark mb-4">
                Niche Experts
              </h4>
              <p className="text-gray-700">We don't do everything. We do <i>one</i> thing perfectly: launch Israeli and Indian tech companies in the U.S. We understand your business culture and how to translate it for American success.</p>
            </div>
            <div
              className="border border-gray-300 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-primary-dark mb-4">
                Focused Network
              </h4>
              <p className="text-gray-700">Our network isn't generic. It's deep, focused access in Washington D.C. (GovTech, Defense) and California (VCs, Big Tech). We open the right doors, faster.</p>
            </div>
            <div
              className="border border-gray-300 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-primary-dark mb-4">
                Senior, Hands-On Model
              </h4>
              <p className="text-gray-700">You won't be passed to a junior analyst. Our senior partners manage your project from start to finish. We are agile, focused, and personally invested in your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO PROVA SOCIAL (EM INGLÊS E VERDE-ESCURO) */}
      <section ref={testimonialRef} className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Client's Success is Our Only Metric
          </h2>

          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl italic font-light mb-6">
              "Kesher was more than a consultancy; they were our U.S. launch team. They navigated the complexities of D.C. and put us in front of the right decision-makers in record time."
            </blockquote>
            <p className="text-lg font-semibold">
              — CEO, [Israeli Cyber Tech Firm]
            </p>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO CTA FINAL (EM INGLÊS) */}
      <section ref={ctaRef} id="cta" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Conquer the U.S. Market?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Your journey doesn't have to be uncertain. Let's build your entry plan together.
          </p>
          <Button
            onClick={() => setContactModalOpen(true)}
            size="lg"
            className="btn-green-kesher bg-primary-dark hover:bg-primary-medium"
          >
            Schedule Your GTM Strategy Call
          </Button>
        </div>
      </section>

      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Approach;

