
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Mail } from "lucide-react";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-medium mb-4">Stay Connected</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, special offers, and design inspiration.
          </p>
        </div>
        
        {subscribed ? (
          <div className="bg-green-50 text-green-800 rounded-lg p-6 text-center animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Thank you for subscribing!</h2>
            <p className="text-green-700">
              We're excited to share our latest products and offers with you. Check your inbox soon for updates.
            </p>
          </div>
        ) : (
          <div className="bg-secondary rounded-lg p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to receive promotional emails from ESSENCE. I understand that I can unsubscribe at any time.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-medium mb-4">Why Subscribe?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Exclusive access to new collections before anyone else</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Special offers and promotions only for subscribers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Interior design tips and inspiration for your home</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Early access to seasonal sales events</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscribePage;
