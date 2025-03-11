
import { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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

          <nav
            className={cn(
              "absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 border-border md:flex transition-all duration-300 ease-in-out transform origin-top",
              mobileMenuOpen
                ? "opacity-100 scale-y-100 shadow-sm"
                : "opacity-0 scale-y-0 md:opacity-100 md:scale-y-100 pointer-events-none md:pointer-events-auto"
            )}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-8 p-4 md:p-0">
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
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-primary text-white text-xxs rounded-full">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
