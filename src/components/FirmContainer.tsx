"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from '@/hooks/useTranslations';

interface FirmContainerProps {
  logoSrc: string;
  logoAlt: string;
  jobTitleKey: string;
  workDurationKey: string;
  link: string;
}

export default function FirmContainer({ 
  logoSrc, 
  logoAlt, 
  jobTitleKey, 
  workDurationKey,
  link
}: FirmContainerProps) {
  const t = useTranslations('Experience');

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        glass 
        flex items-center 
        gap-2 lg:gap-2.5 
        px-3 lg:px-4 py-2 
        rounded-[36px]
        h-auto lg:h-20
        transition-transform duration-200 hover:scale-105
      "
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={60}
        height={60}
        className="
          w-12 h-12 lg:w-[60px] lg:h-[60px] 
          rounded-full  object-cover
        "
      />
      <div className="flex flex-col gap-1 lg:gap-2.5">
        <p className="font-bold text-primary whitespace-nowrap text-[17px] lg:text-[20px]">
          {t(jobTitleKey)}
        </p>
        <p className="font-medium text-primary neon neon-green whitespace-nowrap text-[14px] lg:text-[17px]">
          {t(workDurationKey)}
        </p>
      </div>
    </a>
  );
}