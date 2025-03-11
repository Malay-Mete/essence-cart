
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-medium mb-8 text-center">About ESSENCE</h1>
        
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-16 h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern office space with ESSENCE furniture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-center">
            <div className="p-8 max-w-2xl">
              <h2 className="text-3xl font-medium mb-4">Our Story</h2>
              <p className="text-lg">
                Founded in 2018, ESSENCE began with a simple vision: to create thoughtfully designed products that bring elegance and functionality to every home.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At ESSENCE, we're driven by the belief that great design should be accessible to everyone. Our mission is to create products that elevate everyday living through a perfect balance of form and function.
            </p>
            <p className="text-muted-foreground">
              We collaborate with talented designers and craftspeople to bring minimalist, timeless pieces into your home that stand the test of time, both in durability and style.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-medium mb-4">Our Values</h2>
            <ul className="space-y-3">
              <li className="pb-3 border-b border-border">
                <h3 className="font-medium">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">We believe in creating products that last, using premium materials and meticulous attention to detail.</p>
              </li>
              <li className="pb-3 border-b border-border">
                <h3 className="font-medium">Sustainable Practices</h3>
                <p className="text-muted-foreground">We're committed to minimizing our environmental footprint through responsible sourcing and production.</p>
              </li>
              <li>
                <h3 className="font-medium">Thoughtful Design</h3>
                <p className="text-muted-foreground">Each product is designed with intention, combining aesthetics with practicality for everyday living.</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium">Sarah Johnson</h3>
              <p className="text-muted-foreground">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium">David Chen</h3>
              <p className="text-muted-foreground">Head of Design</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Emma Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium">Emma Rodriguez</h3>
              <p className="text-muted-foreground">Product Development</p>
            </div>
          </div>
        </div>
        
        {/* Locations */}
        <div>
          <h2 className="text-2xl font-medium mb-8 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="San Francisco Showroom" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">San Francisco Showroom</h3>
                <p className="text-muted-foreground">123 Design District, San Francisco, CA 94107</p>
                <p className="text-sm mt-2">Mon-Sat: 10am-6pm, Sun: 12pm-5pm</p>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="New York Showroom" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">New York Showroom</h3>
                <p className="text-muted-foreground">456 SoHo Street, New York, NY 10013</p>
                <p className="text-sm mt-2">Mon-Sat: 11am-7pm, Sun: 12pm-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
