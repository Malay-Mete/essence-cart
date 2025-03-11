
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const allProducts = [
  {
    id: "minimalist-desk-lamp",
    name: "Minimalist Desk Lamp",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "lighting"
  },
  {
    id: "geometric-table-lamp",
    name: "Geometric Table Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1543198126-a0207c2b69fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lighting"
  },
  {
    id: "scandinavian-floor-lamp",
    name: "Scandinavian Floor Lamp",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1534126874-5f6762c6f6b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lighting"
  },
  {
    id: "industrial-pendant-light",
    name: "Industrial Pendant Light",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1521224911436-5f433c9b2e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lighting"
  },
  {
    id: "ceramic-table-lamp",
    name: "Ceramic Table Lamp",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lighting"
  },
  {
    id: "adjustable-wall-lamp",
    name: "Adjustable Wall Lamp",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1603633222770-e65e672e9711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lighting"
  },
  {
    id: "modern-desk-organizer",
    name: "Modern Desk Organizer",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1587467512961-120760940315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "accessories"
  },
  {
    id: "mid-century-chair",
    name: "Mid-Century Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "furniture"
  },
  {
    id: "minimalist-coffee-table",
    name: "Minimalist Coffee Table",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "furniture"
  },
  {
    id: "scandinavian-bookshelf",
    name: "Scandinavian Bookshelf",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "furniture"
  },
  {
    id: "ceramic-vase-set",
    name: "Ceramic Vase Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1612620535624-f8c8dca7b7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "accessories"
  },
  {
    id: "wall-art-print",
    name: "Wall Art Print",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1554042317-efd62f517ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "accessories"
  }
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const { toast } = useToast();
  
  // Get category from URL params
  const categoryParam = searchParams.get("category");
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const applyFilters = () => {
    // You would normally update the URL with these filters
    setShowFilters(false);
    toast({
      title: "Filters applied",
      description: "Product list has been updated based on your filters",
    });
  };

  const toggleLikeProduct = (productId: string) => {
    setLikedProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );

    const isLiked = likedProducts.includes(productId);
    const productName = allProducts.find(p => p.id === productId)?.name;
    
    toast({
      title: isLiked ? "Removed from saved items" : "Added to saved items",
      description: isLiked 
        ? `${productName} has been removed from your saved items` 
        : `${productName} has been added to your saved items`,
    });
  };
  
  // Filter products based on search, categories, and price range
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = (priceRange.min === "" || product.price >= parseFloat(priceRange.min)) && 
                         (priceRange.max === "" || product.price <= parseFloat(priceRange.max));
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Get unique categories for the filter
  const categories = Array.from(new Set(allProducts.map(product => product.category)));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-6">
            {selectedCategories.length === 1 
              ? `${selectedCategories[0].charAt(0).toUpperCase() + selectedCategories[0].slice(1)} Products` 
              : "All Products"}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-border rounded-md flex items-center justify-center gap-2 hover:bg-muted transition-colors sm:w-auto"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 border border-border rounded-md animate-fade-in">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={`category-${category}`} 
                      className="mr-2"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)} 
                    />
                    <label htmlFor={`category-${category}`} className="capitalize">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
              
              <h3 className="font-medium mt-4 mb-3">Price Range</h3>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  placeholder="Min" 
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="w-full p-2 border border-border rounded-md"
                />
                <span>-</span>
                <input 
                  type="number" 
                  placeholder="Max" 
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-full p-2 border border-border rounded-md"
                />
              </div>
              
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={applyFilters}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card group relative">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-image"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => toggleLikeProduct(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-colors"
                  aria-label={likedProducts.includes(product.id) ? "Remove from saved items" : "Save item"}
                >
                  <Heart className={`h-4 w-4 ${likedProducts.includes(product.id) ? "fill-primary text-primary" : "text-foreground"}`} />
                </button>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground capitalize">
                    {product.category}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="font-medium hover:text-primary transition-colors block"
                  >
                    {product.name}
                  </Link>
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
