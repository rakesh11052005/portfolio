import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema
        .extend({
          email: z.string().email("Please enter a valid email address"),
          message: z.string().min(10, "Message must be at least 10 characters long"),
        })
        .parse(req.body);

      const contactMessage = await storage.createContactMessage({
        ...validatedData,
        createdAt: new Date().toISOString(),
      });

      res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        data: contactMessage,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }

      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }
  });

  // Download resume route
  app.get("/api/resume", (req, res) => {
    // In a real application, we would have a file to send
    // Since we can't generate binary files, we'll just send a success message
    res.status(200).json({
      success: true,
      message: "Resume download endpoint",
      downloadUrl: "/resume.pdf", // This would be a real PDF in production
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
