
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Index } from "@/pages/Index";
import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import SearchPage from "@/pages/SearchPage";
import CartPage from "@/pages/CartPage";
import LikedPage from "@/pages/LikedPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FaqPage from "@/pages/FaqPage";
import ReturnsPage from "@/pages/ReturnsPage";
import SubscribePage from "@/pages/SubscribePage";
import NotFound from "@/pages/NotFound";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="liked" element={<LikedPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="returns" element={<ReturnsPage />} />
            <Route path="subscribe" element={<SubscribePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;
