"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import skillsData from '@/data/skills.json';
import SkillItem from './SkillItem';

export default function SkillList() {
  const [isOpen, setIsOpen] = useState(false);

  const skillsInFirstRow = 5;
  
  const hasMoreSkills = skillsData.length > skillsInFirstRow;
  const skillsToShow = isOpen ? skillsData : skillsData.slice(0, skillsInFirstRow);
  const remainingCount = skillsData.length - skillsInFirstRow;

  return (
    <div className="flex flex-wrap items-end gap-2.5">
      {skillsToShow.map((skill) => (
        <SkillItem 
          key={skill.name} 
          name={skill.name} 
          color={skill.color} 
        />
      ))}

      {hasMoreSkills && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center
            font-bold text-sm text-primary
            border-[2px] border-stroke
            transition-all
            ${isOpen ? 'h-6 w-9 rounded-[24px]' : 'px-2 py-0.5 rounded-[24px]'}
          `}
        >
          {isOpen ? (
            <Image
              src="/icons/arrow_up.svg"
              alt="Pokaż mniej"
              width={16}
              height={16}
              className="neon neon-primary"
            />
          ) : (
            <span className="neon neon-primary">
              {`+${remainingCount}`}
            </span>
          )}
        </button>
      )}
    </div>
  );
}