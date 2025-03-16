import React from "react";
import { LucideIcon } from "lucide-react";

interface ToolItemProps {
  name: string;
  icon: React.ReactNode;
}

const ToolItem = ({ name, icon }: ToolItemProps) => {
  return (
    <div className="tool-item text-center">
      <div className="bg-[#2A2A2A] p-4 mb-2 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xs">{name}</p>
    </div>
  );
};

export default ToolItem;
