import { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, Menu, X, User, ShoppingCart, Info, Mail, Phone, MapPin, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const categories = [
    { name: "New Arrivals", path: "/search?category=new" },
    { name: "Furniture", path: "/search?category=furniture" },
    { name: "Lighting", path: "/search?category=lighting" },
    { name: "Decor", path: "/search?category=decor" },
    { name: "Kitchen", path: "/search?category=kitchen" },
  ];

  const customerService = [
    { name: "FAQs", path: "/faq", icon: HelpCircle },
    { name: "Returns", path: "/returns", icon: ShoppingCart },
    { name: "Contact Us", path: "/contact", icon: Mail },
    { name: "About Us", path: "/about", icon: Info },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-background py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              className="block md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 ease-in-out" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 ease-in-out" />
              )}
            </button>
            <Link to="/" className="text-xl font-medium">
              ESSENCE
            </Link>
          </div>

          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className={cn(
                    "transition-colors duration-300 ease-in-out font-medium",
                    location.pathname === "/"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className={cn(
                    "transition-colors duration-300 ease-in-out font-medium",
                    location.pathname === "/search"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={cn(
                    "transition-colors duration-300 ease-in-out font-medium",
                    location.pathname === "/about"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={cn(
                    "transition-colors duration-300 ease-in-out font-medium",
                    location.pathname === "/contact"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={cn(
                    "transition-colors duration-300 ease-in-out font-medium",
                    location.pathname === "/faq"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className={cn(
              "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
              mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={cn(
              "fixed top-0 left-0 h-full w-[80%] max-w-sm bg-background z-50 md:hidden overflow-y-auto transition-transform duration-300 ease-in-out transform shadow-lg",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>
                ESSENCE
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                  Main Menu
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className={cn(
                        "block py-2 px-4 rounded-md transition-colors hover:bg-muted",
                        location.pathname === "/" && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/search"
                      className={cn(
                        "block py-2 px-4 rounded-md transition-colors hover:bg-muted",
                        location.pathname === "/search" && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Shop All
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/liked"
                      className={cn(
                        "block py-2 px-4 rounded-md transition-colors hover:bg-muted",
                        location.pathname === "/liked" && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Saved Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className={cn(
                        "block py-2 px-4 rounded-md transition-colors hover:bg-muted",
                        location.pathname === "/cart" && "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                  Shop by Category
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to={category.path}
                        className="block py-2 px-4 rounded-md transition-colors hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                  Customer Service
                </h3>
                <ul className="space-y-2">
                  {customerService.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="flex items-center py-2 px-4 rounded-md transition-colors hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t">
                <Link
                  to="/subscribe"
                  className="block w-full py-3 px-4 bg-primary text-primary-foreground rounded-md text-center font-medium hover:bg-primary/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/search"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300 ease-in-out"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              to="/liked"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300 ease-in-out"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link
              to="/cart"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300 ease-in-out relative"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-primary text-white text-[10px] rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
