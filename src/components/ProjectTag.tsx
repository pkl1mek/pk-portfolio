import React from 'react';

interface ProjectTagProps {
  text: string;
  color: string;
}

export default function ProjectTag({ text, color }: ProjectTagProps) {
  const neonColorClass = `neon-${color}`;
  const borderColorClass = `border-${color}`;

  return (
    <div
      className={`
        w-fit
        px-3 py-0.5 rounded-full
        border-2 ${borderColorClass}
        neon ${neonColorClass}
      `}
    >
      <span
        className={`
          text-primary font-bold
          text-sm lg:text-[14px] xl:text-[17px]
        `}
      >
        {text}
      </span>
    </div>
  );
}