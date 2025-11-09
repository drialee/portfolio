import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Button } from "./ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";

const initials = "/initials.png";

const navBarHeight = 64;

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Photography", id: "photography" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTargetRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling after navigation completes
  useEffect(() => {
    if (location.pathname === "/" && scrollTargetRef.current) {
      // Wait for DOM to be ready
      const scrollToTarget = () => {
        const element = document.getElementById(scrollTargetRef.current!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          scrollTargetRef.current = null; // Clear the target after scrolling
          sessionStorage.removeItem("scrollTarget"); // Clear the flag
        } else {
          // Retry if element not found yet
          requestAnimationFrame(scrollToTarget);
        }
      };
      // Small delay to ensure route has fully rendered
      setTimeout(scrollToTarget, 50);
    }
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "photography") {
      navigate("/photography");
      return;
    }
    // If already on home page, just scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Store target in both ref and sessionStorage, then navigate
      // sessionStorage prevents ScrollToTop from scrolling to top
      scrollTargetRef.current = id;
      sessionStorage.setItem("scrollTarget", id);
      navigate("/");
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="transition-all duration-300 bg-background/90 backdrop-blur-lg border-b border-purple-100 shadow-lg shadow-purple-100/20 py-2"
      >
        <div className="container mx-auto px-6">
          <div
            style={{ height: `${navBarHeight}px` }}
            className="flex items-center justify-between"
          >
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
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group px-3 py-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
                  </button>
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
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 sm:p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="!w-8 !h-8" />
                ) : (
                  <Menu className="!w-8 !h-8" />
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
        className={`fixed top-0 right-0 bottom-0 max-w-64 bg-background/95 backdrop-blur-md border-l border-border/50 z-40 md:hidden ${
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
              <button
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-foreground/80 hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </button>
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
