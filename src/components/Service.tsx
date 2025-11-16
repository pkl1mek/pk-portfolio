"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';

interface ServiceProps {
  iconName: string;
  titleKey: string;
  descriptionKey: string;
}

export default function Service({ iconName, titleKey, descriptionKey }: ServiceProps) {
  const t = useTranslations('Services');
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-glass-gradient glass flex flex-1 flex-col items-start gap-2.5 rounded-[36px] px-6 py-4"
      variants={itemVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div 
        className="
          bg-glass-gradient glass
          p-2 rounded-[36px]
          h-10 w-10 
          flex items-center justify-center
          border-[0.5px]
        "
      >
        <Image
          src={`/icons/${iconName}`}
          alt={`${t(titleKey)} icon`}
          width={24}
          height={24}
          className="object-contain neon neon-green"
        />
      </div>
      <h3 className="font-bold text-primary text-[29px]  xl:text-[35px]">
        {t(titleKey)}
      </h3>
      <p className="font-normal text-primary/80 text-[20px]  xl:text-[24px]">
        {t(descriptionKey)}
      </p>
    </motion.div>
  );
}