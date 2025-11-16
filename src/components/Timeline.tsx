"use client";

import React, { useRef, useState } from 'react';
import experienceData from '@/data/experience.json';
import FirmContainer from './FirmContainer';
import { motion } from 'framer-motion';

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!timelineRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !timelineRef.current) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const dotsContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };


  return (
    <div 
      ref={timelineRef}
      className="
        w-full h-[300px] lg:h-[360px] relative overflow-x-auto 
        cursor-grab active:cursor-grabbing
        scrollbar-none [&::-webkit-scrollbar]:hidden
        ml-[-16px] lg:ml-[-24px] px-4 lg:px-6
        select-none
      "
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeaveOrUp}
      onMouseUp={onMouseLeaveOrUp}
      onMouseMove={onMouseMove}
    >
      <div className="relative flex items-center h-full">
        <motion.div 
          className="relative flex justify-start gap-[150px] lg:gap-[200px] px-32 lg:px-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={dotsContainerVariants}
        >
          
          <motion.div 
            className="absolute top-1/2 left-0 h-1 -translate-y-1/2 bg-primary origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
            style={{ width: '100%' }}
          />
          
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;
            const positionClass = isEven 
              ? 'bottom-full mb-6 lg:mb-9' 
              : 'top-full mt-6 lg:mt-9';

            return (
              <motion.div 
                key={index} 
                className="relative z-10 flex-shrink-0"
                variants={dotVariants}
                transition={{ duration: 0.4, ease: "easeIn" }}
              >
                <div className="w-6 h-6 rounded-full bg-primary" />

                <div className={`
                  absolute left-1/2 -translate-x-1/2 
                  ${positionClass}
                  w-max
                `}>
                  <FirmContainer 
                    logoSrc={exp.logoSrc}
                    logoAlt={exp.logoAlt}
                    jobTitleKey={exp.jobTitleKey}
                    workDurationKey={exp.workDurationKey}
                    link={exp.link}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}