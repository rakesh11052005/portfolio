import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-[#121212]/90 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" onClick={() => setLocation("/")} className="text-xl font-extrabold tracking-wider">
          MEDIA DOME
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            Home
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            Work
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-white text-[#121212] hover:bg-white/90 text-sm font-semibold tracking-wide"
          >
            Let's Talk
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onNavigate={(section) => {
          scrollToSection(section);
          setMobileMenuOpen(false);
        }}
      />
    </motion.header>
  );
};

export default Header;
