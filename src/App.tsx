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
import NotFound from "./pages/NotFound";
const BuilderPage = () => {
    const { pathname } = useLocation();
    
    // We use useState to hold the content data fetched from Builder
    const [content, setContent] = useState(null); 

    useEffect(() => {
        // Fetch content for the current URL path
        builder.get('page', { url: pathname })
            .promise()
            .then((data) => {
                // Set the content data if found
                setContent(data);
            });
    }, [pathname]);

    // If no content is found after checking Builder, render the 404 page
    if (content === null) {
        return <NotFound />; 
    }
    
    // Render the Builder content visually
    return <BuilderComponent model="page" content={content} />;
};
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-northern-virginia" element={<WhyNorthernVirginia />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<BuilderPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
