import React, { useState } from "react";
import { ShoppingBag, Heart, Share2, Truck, RotateCw, ShieldCheck } from "lucide-react";
import { ColorOption } from "./ColorSelector";
import { SizeOption } from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    colors: ColorOption[];
    sizes: SizeOption[];
    features: string[];
  };
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes.find(size => size.inStock)?.id || "");
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId);
  };

  const handleSizeChange = (sizeId: string) => {
    setSelectedSize(sizeId);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCartHandler = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    // Simulate adding to cart
    setIsAddingToCart(true);
    
    setTimeout(() => {
      setIsAddingToCart(false);
      
      // Get the selected color and size names for display
      const selectedColorObj = product.colors.find(c => c.id === selectedColor);
      const selectedSizeObj = product.sizes.find(s => s.id === selectedSize);
      
      // Add to cart context
      addToCart({
        id: `${product.id}-${selectedColor}-${selectedSize}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        color: selectedColorObj?.name || "",
        size: selectedSizeObj?.label || "",
        quantity: quantity,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      });
      
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart`,
      });
    }, 800);
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
    
    toast({
      title: isLiked ? "Removed from saved items" : "Added to saved items",
      description: isLiked 
        ? `${product.name} has been removed from your saved items` 
        : `${product.name} has been added to your saved items`,
    });
  };
  
  const shareProduct = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link copied",
          description: "Product link copied to clipboard",
        });
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-medium">{product.name}</h1>
        <p className="text-2xl font-medium mt-2">${product.price.toFixed(2)}</p>
      </div>
      
      <p className="text-muted-foreground">{product.description}</p>
      
      <ColorSelector 
        colors={product.colors} 
        selectedColor={selectedColor} 
        onChange={handleColorChange} 
      />
      
      <SizeSelector 
        sizes={product.sizes} 
        selectedSize={selectedSize} 
        onChange={handleSizeChange} 
      />
      
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Quantity</h3>
        <div className="flex items-center border border-border rounded-md w-fit">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className={cn(
              "px-4 py-2 transition-colors duration-300",
              quantity <= 1 ? "text-muted-foreground" : "hover:bg-muted"
            )}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-4 py-2 transition-colors duration-300 hover:bg-muted"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={addToCartHandler}
          disabled={isAddingToCart}
          className={cn(
            "add-to-cart-button flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-5 rounded-md font-medium",
            isAddingToCart && "opacity-70 cursor-not-allowed"
          )}
        >
          {isAddingToCart ? (
            <>
              <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </>
          )}
        </button>
        
        <button
          onClick={toggleLike}
          className={cn(
            "flex items-center justify-center gap-2 border border-border py-3 px-5 rounded-md font-medium transition-colors duration-300",
            isLiked ? "bg-primary/10 border-primary text-primary" : "hover:border-primary"
          )}
        >
          <Heart className={cn("h-5 w-5", isLiked && "fill-primary")} />
          <span className="sr-only sm:not-sr-only">{isLiked ? "Saved" : "Save"}</span>
        </button>
        
        <button
          onClick={shareProduct}
          className="flex items-center justify-center gap-2 border border-border py-3 px-5 rounded-md font-medium hover:border-primary transition-colors duration-300"
        >
          <Share2 className="h-5 w-5" />
          <span className="sr-only sm:not-sr-only">Share</span>
        </button>
      </div>
      
      <div className="pt-6 border-t border-border space-y-4">
        <div className="flex gap-3">
          <Truck className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Free Delivery</h4>
            <p className="text-sm text-muted-foreground">Free standard shipping on orders over $100</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <RotateCw className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Free Returns</h4>
            <p className="text-sm text-muted-foreground">Return items within 30 days for a full refund</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <ShieldCheck className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <div>
            <h4 className="font-medium">Secure Checkout</h4>
            <p className="text-sm text-muted-foreground">All payments are secured and encrypted</p>
          </div>
        </div>
      </div>
      
      {product.features.length > 0 && (
        <div className="pt-6 border-t border-border">
          <h3 className="font-medium mb-3">Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-muted-foreground">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
