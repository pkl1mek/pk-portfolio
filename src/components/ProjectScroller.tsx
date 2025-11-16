"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'; 

export default function ProjectScroller({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    document.body.style.cursor = 'grabbing'; 
    setStartX(e.clientX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    if (isDragging) {
      document.body.style.cursor = ''; 
    }
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.clientX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.3 
      }
    }
  };

  return (
    <motion.div 
      ref={scrollerRef}
      className="
        grid grid-cols-1 gap-8
        lg:flex lg:gap-8
        lg:overflow-x-auto 
        lg:cursor-grab lg:active:cursor-grabbing
        scrollbar-none [&::-webkit-scrollbar]:hidden
        select-none
      "
      variants={containerVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeaveOrUp}
      onMouseUp={onMouseLeaveOrUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </motion.div>
  );
}