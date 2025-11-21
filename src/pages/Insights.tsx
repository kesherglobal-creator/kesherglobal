import React, { useState, useEffect, useMemo } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../App.css'; 

const filterCategories = ["All", "Technology", "Strategy", "Regulation", "Market Entry"];

interface InsightsProps {
  setContactModalOpen: (open: boolean) => void;
}

const Insights: React.FC<InsightsProps> = ({ setContactModalOpen }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "Navigating the Northern Virginia Tech Corridor: A Strategic Guide for Israeli Tech Companies",
      category: "Market Entry",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F876909718483471980649c2a852bdc5c?format=webp&width=800",
      excerpt: "Understanding the unique advantages of establishing operations in the Northern Virginia tech ecosystem.",
      author: "Asher Kotz",
      date: "November 2025",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The CFIUS Process Demystified: What Foreign Tech Companies Need to Know",
      category: "Regulations",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F633476899cb04f8981b65581be6bc260?format=webp&width=800",
      excerpt: "A comprehensive guide to navigating foreign investment reviews and regulatory compliance.",
      author: "R. Levin",
      date: "October 2025",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "From Tel Aviv to Tysons: Success Stories of Israeli Tech Companies in Virginia",
      category: "Case Studies",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F141bd697450b4275a7a29737c0775691?format=webp&width=800",
      excerpt: "Real-world examples of Israeli companies that successfully expanded into the US market.",
      author: "Kesher Team",
      date: "September 2025",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Indian SaaS Companies Breaking into the US Federal Market",
      category: "Market Entry",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F9f86db4925a3482cada35fe24dca3dd3?format=webp&width=800",
      excerpt: "Emerging opportunities for Indian SaaS providers in the lucrative federal government sector.",
      author: "P. Sharma",
      date: "August 2025",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Understanding US Tech Visa Options: H-1B, L-1, and O-1 Compared",
      category: "Regulations",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F000936b4230d4643855402ff1cd24d0d?format=webp&width=800",
      excerpt: "A detailed comparison of visa categories for tech talent and key eligibility requirements.",
      author: "Immigration Legal",
      date: "July 2025",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "The Northern Virginia Innovation Corridor: Why Location Matters",
      category: "Tech Ecosystems",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2Fd7b772d08e71432b85dd572a35b877fb?format=webp&width=800",
      excerpt: "Exploring the competitive advantages and ecosystem dynamics of Northern Virginia.",
      author: "Kesher Team",
      date: "June 2025",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Pricing Strategies for the US Market: Lessons from Successful Foreign Tech Companies",
      category: "Market Entry",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F58e5cee7b8384bdfbc304d4b34b8d31c?format=webp&width=800",
      excerpt: "How to structure pricing for different customer segments in the competitive US market.",
      author: "A. Kotz",
      date: "May 2025",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "Government Contracting: The Hidden Goldmine for International Tech Firms",
      category: "Market Entry",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F1e4601e3119a4aa0b787b06814d9877c?format=webp&width=800",
      excerpt: "Unlocking opportunities in the federal government procurement landscape.",
      author: "Kesher Team",
      date: "April 2025",
      readTime: "8 min read",
    },
    {
      id: 9,
      title: "Building Your Executive Team in the US: Talent Acquisition Strategies",
      category: "Tech Ecosystems",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F1e77a30c79044b14bb39e9eb46d86ecb?format=webp&width=800",
      excerpt: "Best practices for recruiting and retaining top talent in competitive US markets.",
      author: "Talent Team",
      date: "March 2025",
      readTime: "6 min read",
    },
  ];
  
const filteredArticles = useMemo(() => {
  return articles
    .filter(article => currentFilter === "All" || article.category === currentFilter)
    .filter(article =>
      article.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
}, [currentFilter, currentSearchTerm]);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation onContactClick={() => setContactModalOpen(true)} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 text-center bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 fade-in-section">Insights & Market Intelligence</h1>
            <p className="text-xl text-gray-600 fade-in-section">Expert analysis on US market entry, tech ecosystems, and cross-border expansion strategies for global innovators.</p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="w-full max-w-lg mx-auto mb-8">
              <input
                type="search"
                placeholder="Search articles..."
                value={currentSearchTerm}
                onChange={(e) => setCurrentSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors font-medium cursor-pointer ${
                      currentFilter === category
                        ? "bg-primary-dark text-white border-primary-dark shadow-md"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                    }`}
                  onClick={() => setCurrentFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow fade-in-section bg-white">
                    <div className="h-40 overflow-hidden rounded-md mb-4">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span className="font-semibold text-primary-dark">{article.category}</span>
                        <span className="text-gray-500">{article.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold hover:text-primary-dark transition-colors">{article.title}</h3>

                      <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center justify-between pt-2 border-t mt-2">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <span className="insights-author">{article.author}</span>
                          <span>•</span>
                          <span className="insights-date">{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">No articles found matching your search or filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-lg mb-6">Get monthly insights on US market trends and expansion strategies</p>
            <form className="flex justify-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required aria-label="Email Address" className="px-4 py-2 border rounded-lg w-full max-w-sm" />
              <button type="submit" className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-light transition-colors">Subscribe</button>
            </form>
          </div>
        </section>
      </main> 

      <Footer />
    </div>
  );
};

export default Insights;
