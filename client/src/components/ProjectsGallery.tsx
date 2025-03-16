import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "./WorkCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Branding", "UX/UI", "Development"];

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.categories.includes(activeCategory.toLowerCase())
      );

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            MASTERPIECE
          </motion.h2>
          
          <div className="filter-buttons flex space-x-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                className={`px-4 py-2 text-sm ${
                  activeCategory === category
                    ? "bg-[#2A2A2A] text-white hover:bg-[#2A2A2A]"
                    : "bg-transparent text-white hover:bg-primary hover:text-[#121212]"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <WorkCard 
                key={project.id}
                project={project}
                className={
                  (project.id === "impactful-work" || project.id === "customer-service") 
                    ? "col-span-1 md:col-span-2" 
                    : ""
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            className="inline-flex items-center space-x-2 px-8 py-6 bg-white text-[#121212] hover:bg-white/90 transition-colors h-auto"
          >
            <span>See All Projects</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
