import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { X, Menu } from "lucide-react";

const initials = "/initials.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle hash navigation on home page
      if (location.pathname === "/") {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = href;
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-hidden ${
          isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-purple-100 shadow-lg shadow-purple-100/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 pt-2">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/">
                <img
                  src={initials}
                  alt="Dria Lee"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group px-3 py-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group px-3 py-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 sm:p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-16 right-0 bottom-0 w-full max-w-64 bg-background/95 backdrop-blur-md border-l border-border/50 z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.href.startsWith("/#") ? (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
};

export default NavBar;
