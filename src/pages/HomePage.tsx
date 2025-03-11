
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: "minimalist-desk-lamp",
    name: "Minimalist Desk Lamp",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Lighting"
  },
  {
    id: "scandinavian-floor-lamp",
    name: "Scandinavian Floor Lamp",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1534126874-5f6762c6f6b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Lighting"
  },
  {
    id: "ceramic-table-lamp",
    name: "Ceramic Table Lamp",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Lighting"
  },
  {
    id: "modern-desk-organizer",
    name: "Modern Desk Organizer",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587467512961-120760940315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  }
];

const categories = [
  {
    id: "lighting",
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "furniture",
    name: "Furniture",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Modern interior with desk lamp" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">Elevate Your Space</h1>
                <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-150">
                  Discover curated designs that transform your home into a sanctuary of style and comfort.
                </p>
                <Link 
                  to="/search" 
                  className="inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-md font-medium animate-fade-in animation-delay-300 hover:bg-white/90 transition-colors"
                >
                  Shop Collection
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-medium">Featured Products</h2>
            <Link 
              to="/search" 
              className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`} 
                className="product-card group"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/search?category=${category.id}`} 
                className="relative rounded-lg overflow-hidden h-[300px] group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-medium text-white mb-2">{category.name}</h3>
                  <span className="text-white/80 inline-flex items-center gap-1 text-sm">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-secondary">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Stay up to date with our latest collections, design ideas, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary flex-grow"
              />
              <Link 
                to="/subscribe" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
