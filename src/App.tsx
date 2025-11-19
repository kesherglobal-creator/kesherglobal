import React, { useState, useEffect } from 'react';
import { builder, BuilderComponent } from '@builder.io/react';
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom"; 
// Imports from your project:
import Index from "./pages/Index";
import WhyNorthernVirginia from "./pages/WhyNorthernVirginia";
import AboutUs from "./pages/AboutUs";
import Insights from "./pages/Insights"; // Component for Insights page
import Approach from "./pages/Approach"; // Component for Approach page
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@components/ui/tooltip"; // Using standard alias
import { Toaster } from "@components/ui/toaster";
import { Sonner } from "@components/ui/sonner";
import { builder } from '@builder.io/react';

// Initialize Builder.io with your Public API Key
builder.init("142191b903224201bba966351916aa13"); 

const queryClient = new QueryClient();

// Component to handle dynamic Builder.io pages
const BuilderPage = () => {
    const { pathname } = useLocation();
    
    const [content, setContent] = useState(null); 
    const contentPath = pathname === '/' ? 'index' : pathname;

    useEffect(() => {
        builder.get('page', { url: contentPath, userAttributes: { url: contentPath } })
            .promise()
            .then((data) => setContent(data));
    }, [contentPath]);
    
    // Fallback: If Builder.io content is null, show NotFound
    if (content === null) {
        return <NotFound />; 
    }

    // Render the Builder content
    return <BuilderComponent model="page" content={content} />;
};

// Main application component
const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    {/* --- STATIC REACT PAGES (MUST BE DEFINED HERE) --- */}
                    <Route path="/" element={<Index />} />
                    <Route path="/why-northern-virginia" element={<WhyNorthernVirginia />} />
                    <Route path="/about" element={<AboutUs />} />
                    
                    {/* --- BUILDER.IO PAGES THAT USE CODE COMPONENTS --- */}
                    {/* If Insights and Approach are mostly static, link them to the local files: */}
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/how-we-work" element={<Approach />} />
                    <Route path="/approach" element={<Approach />} />
                    
                    {/* --- DYNAMIC CATCH-ALL (MUST BE LAST) --- */}
                    {/* This handles any other URL (like /privacy-policy or future pages) */}
                    <Route path="*" element={<BuilderPage />} /> 
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
