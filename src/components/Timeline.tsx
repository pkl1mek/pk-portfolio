"use client";

import React, { useRef, useState } from 'react';
import experienceData from '@/data/experience.json';
import FirmContainer from './FirmContainer';

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

  return (
    <div 
      ref={timelineRef}
      className="
        w-full h-[300px] lg:h-[400px] relative overflow-x-auto 
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
        <div className="relative flex justify-start gap-[150px] lg:gap-[200px] px-32 lg:px-48">
          
          <div className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 bg-primary" />
          
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;
            const positionClass = isEven 
              ? 'bottom-full mb-6 lg:mb-9' 
              : 'top-full mt-6 lg:mt-9';

            return (
              <div 
                key={index} 
                className="relative z-10 flex-shrink-0"
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
                    jobTitle={exp.jobTitle}
                    workDuration={exp.workDuration}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}