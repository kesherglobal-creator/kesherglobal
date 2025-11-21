import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import '../App.css'; 

const filterCategories = ["All", "Technology", "Strategy", "Regulation", "Market Entry"];

interface InsightsProps {
  setContactModalOpen: (open: boolean) => void;
}

const Insights: React.FC<InsightsProps> = ({ setContactModalOpen }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    return articleData
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
