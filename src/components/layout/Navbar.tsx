
import { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-spring",
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
                <X className="h-6 w-6 transition-transform duration-300 ease-spring" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 ease-spring" />
              )}
            </button>
            <a href="/" className="text-xl font-medium">
              ESSENCE
            </a>
          </div>

          <nav
            className={cn(
              "absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 border-border md:flex transition-all duration-300 ease-spring transform origin-top",
              mobileMenuOpen
                ? "opacity-100 scale-y-100 shadow-sm"
                : "opacity-0 scale-y-0 md:opacity-100 md:scale-y-100 pointer-events-none md:pointer-events-auto"
            )}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-8 p-4 md:p-0">
              <li>
                <a
                  href="/"
                  className="text-foreground hover:text-primary transition-colors duration-300 ease-spring font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-foreground hover:text-primary transition-colors duration-300 ease-spring font-medium"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/collections"
                  className="text-foreground hover:text-primary transition-colors duration-300 ease-spring font-medium"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-foreground hover:text-primary transition-colors duration-300 ease-spring font-medium"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300 ease-spring"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300 ease-spring"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300 ease-spring relative"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-primary text-white text-xxs rounded-full">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
