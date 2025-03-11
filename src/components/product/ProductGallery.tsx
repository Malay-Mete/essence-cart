
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageZoom from "../ui/ImageZoom";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!thumbnailsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - thumbnailsRef.current.offsetLeft);
    setScrollLeft(thumbnailsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !thumbnailsRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    thumbnailsRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      <div 
        className="relative rounded-lg overflow-hidden aspect-[4/5] md:aspect-[4/5] mb-4"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="h-full w-full transition-transform duration-500 ease-spring">
          <ImageZoom 
            src={images[activeIndex]} 
            alt={`${productName} - Image ${activeIndex + 1}`} 
            className="h-full"
          />
        </div>
        
        <button 
          onClick={handlePrev}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-soft border border-border/50 transition-all duration-300 ease-spring transform z-10",
            isHovering ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          onClick={handleNext}
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-soft border border-border/50 transition-all duration-300 ease-spring transform z-10",
            isHovering ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div 
        ref={thumbnailsRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ease-spring",
              index === activeIndex ? "border-2 border-primary" : "border border-border opacity-70 hover:opacity-100"
            )}
            aria-label={`View image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
          >
            <img
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
