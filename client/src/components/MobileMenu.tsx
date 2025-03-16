import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavigate }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "Work", section: "work" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#121212]/90 backdrop-blur-md lg:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="h-full flex flex-col p-6">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white"
              >
                <X className="h-8 w-8" />
              </Button>
            </div>
            
            <div className="flex flex-col space-y-6 items-center justify-center h-full">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.section}
                  custom={i}
                  variants={itemVariants}
                  className="w-full text-center"
                >
                  <Button
                    variant="ghost"
                    className="text-2xl font-bold hover:text-primary py-4 w-full"
                    onClick={() => onNavigate(item.section)}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              
              <motion.div
                custom={menuItems.length}
                variants={itemVariants}
                className="mt-8"
              >
                <Button
                  onClick={() => onNavigate("contact")}
                  className="bg-white text-[#121212] hover:bg-white/90 px-8 py-3 text-lg"
                >
                  Let's Talk
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
