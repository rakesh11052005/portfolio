import { useParams, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetails() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  
  useEffect(() => {
    if (!project) {
      setLocation("/");
    }
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, setLocation]);

  if (!project) return null;

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#121212] text-white"
    >
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => setLocation("/")}
            variant="outline"
            className="mb-8 border-white text-white hover:bg-white hover:text-[#121212]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
          
          <div className="mb-12">
            <span className="text-sm uppercase tracking-wider text-primary mb-4 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              {project.description}
            </p>
          </div>
          
          <div className="mb-16">
            <div className="aspect-video w-full bg-[#1A1A1A] overflow-hidden rounded-sm mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">Client</h3>
              <p className="text-gray-400">{project.client}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="text-gray-400 space-y-2">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary mr-2"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Year</h3>
              <p className="text-gray-400">{project.year}</p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-gray-300 text-lg mb-8">
              {project.challenge}
            </p>
            
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-300 text-lg mb-8">
              {project.solution}
            </p>
            
            <h2 className="text-3xl font-bold mb-6">The Result</h2>
            <p className="text-gray-300 text-lg">
              {project.result}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#2A2A2A]">
            {prevProject ? (
              <Button
                onClick={() => setLocation(`/projects/${prevProject.id}`)}
                variant="outline"
                className="mb-4 md:mb-0 border-white text-white hover:bg-white hover:text-[#121212]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous Project
              </Button>
            ) : (
              <div></div>
            )}
            
            {nextProject && (
              <Button
                onClick={() => setLocation(`/projects/${nextProject.id}`)}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#121212]"
              >
                Next Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
}
