import { 
  Image as ImageIcon, 
  Figma, 
  Pen, 
  Globe, 
  Film, 
  Code, 
  RotateCw, 
  MoreHorizontal 
} from 'lucide-react';
import React from 'react';

export const tools = [
  {
    name: "Adobe Suite",
    icon: React.createElement(ImageIcon, { className: "h-8 w-8" })
  },
  {
    name: "Figma",
    icon: React.createElement(Figma, { className: "h-8 w-8" })
  },
  {
    name: "Sketch",
    icon: React.createElement(Pen, { className: "h-8 w-8" })
  },
  {
    name: "Cinema 4D",
    icon: React.createElement(Globe, { className: "h-8 w-8" })
  },
  {
    name: "After Effects",
    icon: React.createElement(Film, { className: "h-8 w-8" })
  },
  {
    name: "VS Code",
    icon: React.createElement(Code, { className: "h-8 w-8" })
  },
  {
    name: "Blender",
    icon: React.createElement(RotateCw, { className: "h-8 w-8" })
  },
  {
    name: "More",
    icon: React.createElement(MoreHorizontal, { className: "h-8 w-8" })
  }
];
