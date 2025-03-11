
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">ESSENCE</h3>
            <p className="text-muted-foreground">
              Modern design for the modern home.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/search?category=lighting" className="text-muted-foreground hover:text-foreground transition-colors">Lighting</Link></li>
              <li><Link to="/search?category=furniture" className="text-muted-foreground hover:text-foreground transition-colors">Furniture</Link></li>
              <li><Link to="/search?category=accessories" className="text-muted-foreground hover:text-foreground transition-colors">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Stay Connected</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates on new products and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary flex-grow"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ESSENCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
