import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/styles/insights.css";

const Insights = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Navigating the DC Tech Corridor: A Strategic Guide for Israeli Tech Companies",
      category: "Market Entry",
      image: "https://cdn.builder.io/api/v1/image/assets%2F142191b903224201bba966351916aa13%2F876909718483471980649c2a852bdc5c?format=webp&width=800",
      excerpt: "Understanding the unique advantages of establishing operations in the Washington DC-Northern Virginia tech ecosystem.",
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

  const filterCategories = ["All", "Market Entry", "Tech Ecosystems", "Regulations", "Case Studies"];

  const filteredArticles = articles.filter((article) => {
    const matchesFilter = currentFilter === "All" || article.category === currentFilter;
    const matchesSearch = article.title.toLowerCase().includes(currentSearchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    fadeInSections.forEach((section) => {
      scrollObserver.observe(section);
    });

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark">
      <Navigation onContactClick={() => setContactModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <section className="insights-hero">
          <div className="insights-hero-content">
            <h1 className="fade-in-section">Insights & Market Intelligence</h1>
            <p className="fade-in-section">Expert analysis on US market entry, tech ecosystems, and cross-border expansion strategies for global innovators.</p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="insights-search-section">
          <div className="insights-container">
            <div className="insights-search-wrapper fade-in-section">
              <input
                type="search"
                placeholder="Search articles..."
                value={currentSearchTerm}
                onChange={(e) => setCurrentSearchTerm(e.target.value)}
                className="insights-search-input"
              />
            </div>

            <div className="insights-filters fade-in-section">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  className={`insights-filter-btn ${currentFilter === category ? "active" : ""}`}
                  onClick={() => setCurrentFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="insights-articles-section">
          <div className="insights-container">
            {filteredArticles.length > 0 ? (
              <div className="insights-articles-grid">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="insights-article-card fade-in-section">
                    <div className="insights-article-image-wrapper">
                      <img src={article.image} alt={article.title} className="insights-article-image" />
                    </div>

                    <div className="insights-article-content">
                      <div className="insights-article-meta-top">
                        <span className="insights-category-badge">{article.category}</span>
                      </div>

                      <h3 className="insights-article-title">{article.title}</h3>

                      <p className="insights-article-excerpt">{article.excerpt}</p>

                      <div className="insights-article-footer">
                        <div className="insights-article-meta">
                          <span className="insights-author">{article.author}</span>
                          <span className="insights-separator">•</span>
                          <span className="insights-date">{article.date}</span>
                        </div>
                        <span className="insights-read-time">{article.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="insights-no-results">
                <p>No articles found matching your search or filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="insights-newsletter">
          <div className="insights-container">
            <div className="insights-newsletter-content">
              <h2>Stay Informed</h2>
              <p>Get monthly insights on US market trends and expansion strategies</p>
              <form className="insights-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email address" required aria-label="Email Address" />
                <button type="submit" className="insights-newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Insights;


export default Insights;
