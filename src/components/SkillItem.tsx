import React from 'react';

interface SkillItemProps {
  name: string;
  color: string;
}

export default function SkillItem({ name, color }: SkillItemProps) {
  const neonColorClass = `neon-${color}`;
  const borderColorClass = `border-${color}`;

  return (
    <div
      className={`
        px-2 py-0.5 rounded-[24px]
        border-[2px] ${borderColorClass}
        neon ${neonColorClass}
        will-change-transform
      `}
    >
      <span
        className={`
          text-primary font-bold 
          text-sm lg:text-xs xl:text-[17px]
        `}
      >
        {name}
      </span>
    </div>
  );
}