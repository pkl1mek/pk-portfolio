"use client";

import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';

interface ProjectTagProps {
  textKey: string;
  color: string;
}

export default function ProjectTag({ textKey, color }: ProjectTagProps) {
  const t = useTranslations('Projects');
  const neonColorClass = `neon-${color}`;
  const borderColorClass = `border-${color}`;

  return (
    <div
      className={`
        w-fit
        px-3 py-0 rounded-full
        border-2 ${borderColorClass}
        neon ${neonColorClass}
      `}
    >
      <span
        className={`
          text-primary font-bold
          sm:text-[14px] lg:text-[14px] xl:text-[17px]
        `}
      >
        {t(textKey)}
      </span>
    </div>
  );
}