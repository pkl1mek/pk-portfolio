"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import skillsData from '@/data/skills.json';
import SkillItem from './SkillItem';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';

const skillsInFirstRow = 5;

const getShuffledSkills = () => {
  const shuffled = [...skillsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, skillsInFirstRow);
};

export default function SkillList() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [initialSkills, setInitialSkills] = useState(
    skillsData.slice(0, skillsInFirstRow)
  );

  useEffect(() => {
    setInitialSkills(getShuffledSkills());
  }, []);

  const hasMoreSkills = skillsData.length > skillsInFirstRow;
  const skillsToShow = isOpen ? skillsData : initialSkills;
  const remainingCount = skillsData.length - skillsInFirstRow;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <LayoutGroup>
      <motion.div 
        className="flex flex-wrap items-end gap-2.5"
        layout
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        {skillsToShow.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeIn" }}
            layout
          >
            <SkillItem 
              name={skill.name} 
              color={skill.color} 
            />
          </motion.div>
        ))}

        <AnimatePresence>
          {hasMoreSkills && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`
                flex items-center justify-center
                font-bold text-primary
                border-[2px] border-stroke
                transition-all
                text-sm lg:text-xs xl:text-[17px]
                ${isOpen ? 'h-6 w-8 rounded-[36px]' : 'px-2 py-0.5 rounded-[24px]'}
              `}
            >
              {isOpen ? (
                <Image
                  src="/icons/arrow_up.svg"
                  alt="Pokaż mniej"
                  width={16}
                  height={18}
                  className="neon neon-primary"
                />
              ) : (
                <span className="neon neon-primary">
                  {`+${remainingCount}`}
                </span>
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
}