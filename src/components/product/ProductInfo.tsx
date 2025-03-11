
import React, { useState } from "react";
import { ShoppingBag, Heart, Share2, Truck, RotateCw, ShieldCheck } from "lucide-react";
import { ColorOption } from "./ColorSelector";
import { SizeOption } from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { cn } from "@/lib/utils";

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

  const addToCart = () => {
    // Simulate adding to cart
    setIsAddingToCart(true);
    
    setTimeout(() => {
      setIsAddingToCart(false);
      // Here you would actually add the item to cart
      console.log("Added to cart:", {
        productId: product.id,
        colorId: selectedColor,
        sizeId: selectedSize,
        quantity
      });
    }, 800);
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
          onClick={addToCart}
          disabled={!selectedSize || isAddingToCart}
          className={cn(
            "add-to-cart-button flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-5 rounded-md font-medium",
            (!selectedSize || isAddingToCart) && "opacity-70 cursor-not-allowed"
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
          className="flex items-center justify-center gap-2 border border-border py-3 px-5 rounded-md font-medium hover:border-primary transition-colors duration-300"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only sm:not-sr-only">Save</span>
        </button>
        
        <button
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
