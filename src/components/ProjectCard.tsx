"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectTag from './ProjectTag';
import { FaEye, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  type: string;
  color: string;
  imageUrl: string;
}

export default function ProjectCard({
  type,
  color,
  imageUrl,
}: ProjectCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (isImageOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }
    
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isImageOpen]);

  const openImageOverlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImageOpen(true);
  };

  const closeImageOverlay = () => {
    setIsImageOpen(false);
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <>
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
          cursor-pointer
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
          <ProjectTag text={type} color={color} />
          <button 
            onClick={openImageOverlay}
            className="
              self-end 
              w-9 h-9 md:w-12 md:h-12
              rounded-full 
              glass bg-glass-gradient
              flex items-center justify-center
              text-primary neon neon-primary
              hover:scale-110 transition-transform
            "
            aria-label="Powiększ obraz"
          >
            <FaEye size={24} />
          </button>
        </div>
      </motion.div>

      {isImageOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeImageOverlay}
        >
          <button
            onClick={closeImageOverlay}
            className="absolute top-6 right-6 text-white text-4xl hover:neon hover:neon-green transition-colors"
            aria-label="Zamknij"
          >
            <FaTimes />
          </button>

          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageUrl}
              alt={type}
              width={1920}
              height={1080}
              className="
                object-contain w-auto h-auto 
                max-w-[calc(100vw-2.5rem)]
                max-h-[85vh]
                lg:max-h-[90vh]
              "
            />
          </div>
        </div>
      )}
    </>
  );
}