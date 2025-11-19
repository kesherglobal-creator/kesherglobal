import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BuilderComponent, builder } from "@builder.io/react";
import Index from "./pages/Index";
import WhyNorthernVirginia from "./pages/WhyNorthernVirginia";
import AboutUs from "./pages/AboutUs";
import Approach from "./pages/Approach";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";

// Initialize Builder.io with your API key
builder.init("142191b903224201bba966351916aa13");

const queryClient = new QueryClient();

// BuilderPage component for dynamic Builder.io content
const BuilderPage = () => {
  const { pathname } = useLocation();
  
  const contentPath = pathname.substring(1);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    builder
      .get('page', { url: contentPath })
      .promise()
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        setContent(null);
        setLoading(false);
      });
  }, [contentPath]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  
  if (content === null) {
    return <NotFound />;
  }
  
  return <BuilderComponent model="page" content={content} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Hardcoded pages from code */}
          <Route path="/" element={<Index />} />
          <Route path="/why-northern-virginia" element={<WhyNorthernVirginia />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/how-we-work" element={<Approach />} />
          <Route path="/insights" element={<Insights />} />
          
          {/* Catch-all route for Builder.io dynamic pages */}
          <Route path="*" element={<BuilderPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
