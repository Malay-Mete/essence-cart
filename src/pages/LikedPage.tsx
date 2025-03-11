
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash } from "lucide-react";

// Dummy liked products
const likedProducts = [
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
    id: "mid-century-chair",
    name: "Mid-Century Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Furniture"
  }
];

const LikedPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium mb-8">Saved Items</h1>
        
        {likedProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">No saved items</h2>
            <p className="text-muted-foreground mb-6">
              You haven't saved any products yet. Browse our products and click the heart icon to save your favorites.
            </p>
            <Link
              to="/search"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedProducts.map(product => (
              <div key={product.id} className="border border-border rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-primary hover:bg-white transition-colors"
                    aria-label="Remove from saved items"
                  >
                    <Trash className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {product.name}
                    </Link>
                    <p className="font-medium mt-1">${product.price.toFixed(2)}</p>
                  </div>
                  
                  <button
                    className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
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

export default LikedPage;
