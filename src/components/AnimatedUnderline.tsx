"use client";

import { motion } from 'framer-motion';

export default function AnimatedUnderline() {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
    }
  };

  return (
    <motion.span
      className="
        absolute -bottom-2 left-0 h-[3px] w-3/4
        bg-primary neon neon-green
        origin-left
      "
      variants={lineVariants}
      transition={{ 
        duration: 0.7, 
        ease: [0.32, 0.72, 0, 1],
        delay: 0.4 
      }}
    />
  );
}