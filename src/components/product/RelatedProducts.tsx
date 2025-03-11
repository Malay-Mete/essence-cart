
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    
    // Show left arrow if not at the start
    setShowLeftArrow(container.scrollLeft > 0);
    
    // Show right arrow if not at the end
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
    setShowRightArrow(!isAtEnd);
  };

  return (
    <section className="py-8 border-t border-border">
      <h2 className="text-2xl font-medium mb-6">Related Products</h2>
      
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background shadow-soft border border-border/50 transition-all duration-300 ease-spring transform hover:bg-muted"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 -mx-4 px-4 snap-x"
          onScroll={handleScroll}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="product-card flex-shrink-0 w-[210px] snap-start"
            >
              <a href={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="font-medium truncate">{product.name}</h3>
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background shadow-soft border border-border/50 transition-all duration-300 ease-spring transform hover:bg-muted"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
