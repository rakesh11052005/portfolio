import React from "react";

interface SkillItemProps {
  name: string;
}

const SkillItem = ({ name }: SkillItemProps) => {
  return (
    <div className="skill-item">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-primary"></div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
};

export default SkillItem;
