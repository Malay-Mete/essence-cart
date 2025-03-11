import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (newItem: CartItem) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        item => item.productId === newItem.productId && 
               item.color === newItem.color && 
               item.size === newItem.size
      );
      
      if (existingItemIndex >= 0) {
        // If item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Otherwise, add the new item
        return [...prevItems, { ...newItem, id: `${newItem.productId}-${Date.now()}` }];
      }
    });
  };
  
  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        getCartCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
