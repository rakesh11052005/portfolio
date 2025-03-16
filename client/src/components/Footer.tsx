import { Link } from "wouter";

const Footer = () => {
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
    <footer className="bg-[#1A1A1A] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-extrabold tracking-wider">
              MEDIA DOME
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              We create impactful digital experiences that elevate brands and transform businesses through strategic creativity.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("work");
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#444444] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Media Dome. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">Designed with passion in New York</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
