
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 10.00 : 0;
  const total = subtotal + shipping;

  const removeItemHandler = (itemId: string) => {
    const itemToRemove = cartItems.find(item => item.id === itemId);
    removeItem(itemId);
    
    if (itemToRemove) {
      toast({
        title: "Item removed",
        description: `${itemToRemove.name} has been removed from your cart`,
      });
    }
  };

  const clearCartHandler = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const proceedToCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "Proceeding to payment...",
    });
    // Here you would navigate to checkout
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/search"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left py-4 px-6">Product</th>
                      <th className="text-center py-4 px-2">Quantity</th>
                      <th className="text-right py-4 px-6">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-t border-border">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <Link to={`/product/${item.productId}`} className="shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-20 h-20 object-cover rounded-md" 
                              />
                            </Link>
                            <div>
                              <Link 
                                to={`/product/${item.productId}`}
                                className="font-medium hover:text-primary transition-colors"
                              >
                                {item.name}
                              </Link>
                              <div className="text-sm text-muted-foreground mt-1">
                                {item.color} / {item.size}
                              </div>
                              <div className="text-sm mt-1">${item.price.toFixed(2)}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-border rounded-l-md hover:bg-muted transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <div className="w-10 h-8 flex items-center justify-center border-t border-b border-border">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-border rounded-r-md hover:bg-muted transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-4">
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeItemHandler(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                              aria-label="Remove item"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Link
                  to="/search"
                  className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCartHandler}
                  className="text-sm font-medium flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            
            <div>
              <div className="border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 border-b border-border pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between mb-6">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={proceedToCheckout}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Proceed to Checkout
                </button>
                
                <div className="mt-4 text-xs text-muted-foreground text-center">
                  Shipping and taxes calculated at checkout
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
