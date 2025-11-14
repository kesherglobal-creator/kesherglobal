import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={() => setContactModalOpen(true)} />
      <Hero onContactClick={() => setContactModalOpen(true)} />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <AboutSection />
      <FinalCTA onContactClick={() => setContactModalOpen(true)} />
      <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
};

export default Index;
