import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <div className="section-divider relative h-px w-full bg-[#444444] my-24 mx-auto">
          <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <ProjectsGallery />
        <div className="section-divider relative h-px w-full bg-[#444444] my-24 mx-auto">
          <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <AboutSection />
        <div className="section-divider relative h-px w-full bg-[#444444] my-24 mx-auto">
          <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}
