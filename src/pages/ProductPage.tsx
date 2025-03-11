
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ReviewsSection from "@/components/product/ReviewsSection";
import RelatedProducts from "@/components/product/RelatedProducts";
import Footer from "@/components/layout/Footer";

// Dummy product data - in a real app, this would come from an API
const product = {
  id: "minimalist-desk-lamp",
  name: "Minimalist Desk Lamp",
  price: 129.99,
  description: "Illuminate your workspace with our sleek minimalist desk lamp. Crafted with premium materials, this lamp combines form and function in a timeless design that complements any decor style.",
  colors: [
    { id: "matte-black", name: "Matte Black", value: "#1a1a1a", inStock: true },
    { id: "brushed-brass", name: "Brushed Brass", value: "#d4b876", inStock: true },
    { id: "white", name: "White", value: "#ffffff", inStock: true },
    { id: "copper", name: "Copper", value: "#b87333", inStock: false }
  ],
  sizes: [
    { id: "small", label: "S", inStock: true },
    { id: "medium", label: "M", inStock: true },
    { id: "large", label: "L", inStock: false },
    { id: "xlarge", label: "XL", inStock: true }
  ],
  features: [
    "Adjustable arm for precise lighting",
    "Energy-efficient LED technology",
    "Touch-sensitive dimmer control",
    "5-year warranty",
    "Aircraft-grade aluminum construction"
  ]
};

// Dummy product images
const productImages = [
  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
];

// Dummy reviews
const reviews = [
  {
    id: "1",
    author: "Alex Johnson",
    rating: 5,
    date: "2023-08-15",
    title: "Perfect addition to my workspace",
    content: "I've been looking for a minimalist lamp that doesn't compromise on functionality, and this exceeded my expectations. The build quality is exceptional and the dimming feature works flawlessly.",
    verified: true
  },
  {
    id: "2",
    author: "Sarah Miller",
    rating: 4,
    date: "2023-07-22",
    title: "Elegant design, minor issues",
    content: "The lamp looks stunning on my desk and the light quality is excellent. Removed one star because the touch controls can be a bit sensitive sometimes.",
    verified: true
  },
  {
    id: "3",
    author: "Michael Chen",
    rating: 5,
    date: "2023-06-30",
    title: "Worth every penny",
    content: "The attention to detail is remarkable. From the packaging to the product itself, everything speaks quality. I especially love how the arm stays exactly where you position it.",
    verified: false
  },
  {
    id: "4",
    author: "Emma Rodriguez",
    rating: 3,
    date: "2023-05-18",
    title: "Good but expected more",
    content: "The design is beautiful and minimalist as advertised. However, I found the brightness levels to be somewhat limited for my needs. It works well as an accent light though.",
    verified: true
  },
  {
    id: "5",
    author: "James Wilson",
    rating: 5,
    date: "2023-04-12",
    title: "Simple perfection",
    content: "Exactly what I was looking for. Clean lines, perfect light temperature, and the materials feel premium to the touch. Would definitely recommend to anyone looking for quality lighting.",
    verified: true
  }
];

// Dummy related products
const relatedProducts = [
  {
    id: "geometric-table-lamp",
    name: "Geometric Table Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1543198126-a0207c2b69fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    id: "industrial-pendant-light",
    name: "Industrial Pendant Light",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1521224911436-5f433c9b2e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    id: "adjustable-wall-lamp",
    name: "Adjustable Wall Lamp",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1603633222770-e65e672e9711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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

const ProductPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Calculate average rating from reviews
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // In a real app, we would fetch the product data based on the ID parameter
  console.log("Product ID:", id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
            <div className="aspect-square bg-muted rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-10 bg-muted rounded w-2/3"></div>
              <div className="h-6 bg-muted rounded w-1/4"></div>
              <div className="h-24 bg-muted rounded w-full"></div>
              <div className="h-32 bg-muted rounded w-full"></div>
              <div className="h-16 bg-muted rounded w-full"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <ProductGallery 
                images={productImages} 
                productName={product.name} 
              />
            </div>
            
            <div className="animate-slide-in">
              <ProductInfo product={product} />
            </div>
          </div>
        )}
        
        <div className="mt-16 animate-fade-in">
          <ReviewsSection 
            reviews={reviews} 
            averageRating={averageRating} 
            totalReviews={reviews.length} 
          />
        </div>
        
        <div className="animate-fade-in">
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
