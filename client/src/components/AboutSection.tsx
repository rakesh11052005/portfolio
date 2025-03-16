import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import ToolItem from "./ToolItem";
import { skills } from "@/data/skills";
import { tools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const AboutSection = () => {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      await apiRequest("GET", "/api/resume", undefined);
      
      // In a real application, we would download the file
      // Since we don't have a real file, we'll show a toast
      toast({
        title: "Resume Download",
        description: "Your resume download would start automatically.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8">ABOUT</h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                At Media Dome, We Specialize In Building Brands That Captivate And Connect Audiences In The Digital Landscape.
              </p>
              <p className="text-lg leading-relaxed">
                With Design Studios And Masterclass Creative Talent, We Craft Immersive Media And Digital Experiences That Amplify Your Brand's Identity And Reach.
              </p>
              <p className="text-lg leading-relaxed">
                In Today's Fast-Paced Social Media Landscape, Brands Need To Stand Out Through Their Art Direction, Establish A Brand's Message, Gain Virtual Clout, And Offer A Brand's Message Can Unlock Lasting Emotional, Forge Creative Visually Stunning Connections With Target Audiences Across Creativity Across Platforms.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">SKILLS & EXPERTISE</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4">
                {skills.map((skill, index) => (
                  <SkillItem key={index} name={skill} />
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <Button
                onClick={handleDownloadResume}
                className="flex items-center space-x-3 px-8 py-6 bg-white text-[#121212] hover:bg-white/90 transition-colors h-auto"
              >
                <span>Download Resume</span>
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-[400px] mb-8">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Creative design team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border border-primary"></div>
            </div>
            
            <div className="bg-[#1A1A1A] p-8">
              <h3 className="text-2xl font-bold mb-4">TOOLS WE USE</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <ToolItem key={index} name={tool.name} icon={tool.icon} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
