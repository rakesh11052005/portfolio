import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, AtSign, Dribbble, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  newsletter: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8">GET IN TOUCH</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to bring your vision to life? Let's collaborate on your next digital adventure.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-primary p-4">
                  <Mail className="h-6 w-6 text-[#121212]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-gray-300">rakesh123yo@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-primary p-4">
                  <Phone className="h-6 w-6 text-[#121212]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-gray-300">+91 8688446213</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-primary p-4">
                  <MapPin className="h-6 w-6 text-[#121212]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-gray-300">Andhra Pradesh, India - 522201</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-primary p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#121212]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/918688446213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    +91 8688446213
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="bg-[#2A2A2A] p-3 hover:bg-primary hover:text-[#121212] transition-colors" aria-label="Instagram">
                  <AtSign className="h-6 w-6" />
                </a>
                <a href="#" className="bg-[#2A2A2A] p-3 hover:bg-primary hover:text-[#121212] transition-colors" aria-label="Behance">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </a>
                <a href="#" className="bg-[#2A2A2A] p-3 hover:bg-primary hover:text-[#121212] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://wa.me/918688446213" target="_blank" rel="noopener noreferrer" className="bg-[#2A2A2A] p-3 hover:bg-primary hover:text-[#121212] transition-colors" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#2A2A2A] p-3 hover:bg-primary hover:text-[#121212] transition-colors" aria-label="Dribbble">
                  <Dribbble className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-[#1A1A1A] p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full p-3 bg-[#2A2A2A] border-0 focus:ring-primary focus:ring-2 outline-none" 
                          placeholder="John Doe" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium">Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="w-full p-3 bg-[#2A2A2A] border-0 focus:ring-primary focus:ring-2 outline-none" 
                          placeholder="john@example.com" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full p-3 bg-[#2A2A2A] border-0 focus:ring-primary focus:ring-2 outline-none" 
                          placeholder="Project Inquiry" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={6}
                          className="w-full p-3 bg-[#2A2A2A] border-0 focus:ring-primary focus:ring-2 outline-none resize-none" 
                          placeholder="Tell us about your project..." 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="mb-6 flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-primary data-[state=checked]:text-[#121212]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          Subscribe to our newsletter for design insights
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-[#121212] font-semibold hover:bg-white/90 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
