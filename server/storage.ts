import { 
  users, 
  type User, 
  type InsertUser, 
  contactMessages, 
  type ContactMessage, 
  type InsertContactMessage 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(contactMessage: InsertContactMessage & { createdAt: string }): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private userCurrentId: number;
  private contactMessageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.userCurrentId = 1;
    this.contactMessageCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(contactMessageData: InsertContactMessage & { createdAt: string }): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    // Explicitly construct a properly typed object with all required fields
    const contactMessage: ContactMessage = {
      id,
      name: contactMessageData.name,
      email: contactMessageData.email,
      subject: contactMessageData.subject,
      message: contactMessageData.message,
      newsletter: contactMessageData.newsletter === undefined ? false : contactMessageData.newsletter,
      createdAt: contactMessageData.createdAt
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
