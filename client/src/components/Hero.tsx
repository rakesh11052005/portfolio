import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
            variants={itemVariants}
          >
            <span className="block">CREATIVE DIGITAL</span>
            <span className="block">PARTNER</span>
            <span className="block mt-2">ENGAGEMENT</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-xl"
            variants={itemVariants}
          >
            Crafting digital experiences that amplify brands through innovative design and strategic thinking.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex space-x-6"
            variants={itemVariants}
          >
            <Button 
              className="px-8 py-6 bg-white text-[#121212] hover:bg-white/90 transition-colors h-auto"
              onClick={() => scrollToSection("work")}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 border-white hover:bg-white/10 transition-colors h-auto"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-6 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative h-[500px] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Designer working on a creative project" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 h-24 w-24 border border-primary flex items-center justify-center">
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
