import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  image: string;
  categories: string[];
}

interface WorkCardProps {
  project: Project;
  className?: string;
}

const WorkCard = ({ project, className = "" }: WorkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [, setLocation] = useLocation();

  const handleProjectClick = () => {
    setLocation(`/projects/${project.id}`);
  };

  return (
    <motion.div
      className={`project-card group cursor-pointer ${className}`}
      onClick={handleProjectClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="p-6 bg-[#1A1A1A] h-full flex flex-col space-y-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold uppercase">{project.title}</h3>
          <div className={`icon ${isHovered ? 'bg-primary text-[#121212]' : 'bg-[#2A2A2A] text-white'} p-2 transition-colors duration-300`}>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
        
        <div className="overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover" 
            animate={{ 
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div>
          <p className="text-sm uppercase tracking-wider text-primary">{project.category}</p>
          <p className="text-gray-400 mt-2 text-sm">{project.shortDescription}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
