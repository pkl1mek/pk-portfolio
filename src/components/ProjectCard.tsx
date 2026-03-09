"use client";

import React from 'react';
import Image from 'next/image';
import ProjectTag from './ProjectTag';
import { FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  type: string;
  color: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  type,
  color,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      className="
        relative
        rounded-[36px] sm:rounded-[24px]
        w-full
        aspect-video
        lg:aspect-auto
        lg:w-[600px]
        lg:h-[300px]
        xl:h-[400px]
        xl:w-[800px]
        flex-shrink-0
        cursor-grab
        transition-transform duration-300 ease-in-out
        overflow-hidden
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
      "
      variants={itemVariants}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <Image
        src={imageUrl}
        alt={type}
        fill
        className="object-cover"
      />
      <div 
        className="
          absolute inset-0 
          flex flex-col justify-between 
          sm:p-2 md:p-4
          bg-gradient-to-t from-black/60 to-transparent
        "
      >
        <ProjectTag textKey={type} color={color} />
        <a 
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
          cursor-pointer
            self-end 
            w-9 h-9 md:w-12 md:h-12
            rounded-full 
            glass bg-glass-gradient
            flex items-center justify-center
            text-primary neon neon-primary
            hover:scale-110 transition-transform
          "
          aria-label="Zobacz projekt w nowym oknie"
        >
          <FaEye size={24} />
        </a>
      </div>
    </motion.div>
  );
}